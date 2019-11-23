import { database } from '../config/FirebaseConfig'
const odaisRef = database.ref('odais')
const odaiRef = odaiId => database.ref(`odais/${odaiId}`)
const tagOdaisRef = tag => database.ref(`tags/${tag}`)
const tagOdaiRef = (tag, odaiId) => database.ref(`tags/${tag}/${odaiId}`)

export const getOdai = (odaiId, setOdaiValues) => {
  odaiRef(odaiId).once("value")
    .then((odai) => {
      setOdaiValues(odai.val())
    });
}

export const insertOdai = (odai, tags, callback) => {
  odaisRef.push({ ...odai })
    .then((registerOdai) => {
      // tags登録
      setTags(registerOdai.key, tags.addtags, tags.deletetags)

      callback()
    })
    .catch((error) => {

    })
}

export const updateOdai = (odaiId, odai, tags, callback) => {
  odaiRef(odaiId).update({ ...odai })
    .then(() => {
      // tags登録
      setTags(odaiId, tags.addtags, tags.deletetags)
      
      callback()
    })
    .catch((error) => {
    })
}

const setTags = (odaiId, addtags, deletetags) => {
  addtags.map((tag) => {
    tagOdaiRef(tag, odaiId).set(1)
  })
  deletetags.map((tag) => {
    tagOdaiRef(tag, odaiId).remove()
  })
  return
}

export const getOdais = (setOdais) => {
  odaisRef.once("value")
    .then((snapshot) => {
      let odais = [];
      snapshot.forEach((odai) => {
        odais.push({
          id: odai.key,
          ...odai.val(),
        });
      })
      setOdais(odais);
    });
}

export const getOdaisByTag = (tag, setOdais) => {
  tagOdaisRef(tag).once("value")
    .then((tagOdais) => {
      let odaiIds = [];
      tagOdais.forEach((odai) => {
        let flag = odai.val() //enable
        if(flag === 1){
          odaiIds.push(odai.key);
        }
      })
      // odais取得
      getOdaiByIds(odaiIds).then((odais) => {
        setOdais(odais)
      })
    });
}

const getOdaiByIds = async (odaiIds) => {
  let odais = [];
  for (let i = 0; i < odaiIds.length; i++){
    let odai = await odaiRef(odaiIds[i]).once("value")
    odais.push({
      id: odai.key,
      ...odai.val(),
    })
  }
  return odais
}

export default null