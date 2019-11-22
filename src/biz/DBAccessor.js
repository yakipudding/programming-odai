import { database } from '../config/FirebaseConfig'
const root_odai = 'odais'
const root_tag = 'tags'

export const getOdai = (odaiId, setOdaiValues) => {
  database.ref(`${root_odai}/${odaiId}`)
    .once("value")
    .then((odai) => {
      setOdaiValues(odai.val())
    });
}

export const insertOdai = (odai, callback) => {
  database.ref(root_odai)
    .push({
      ...odai,
  }).then(() => {
      callback()
    })
    .catch((error) => {

    })
}

export const updateOdai = (odaiId, odai, callback) => {
  database.ref(`${root_odai}/${odaiId}`)
    .update({
      ...odai,
  }).then(() => {
    callback()
    })
    .catch((error) => {
    })
}

export const getOdais = (setOdais) => {
  database.ref(root_odai)
    .once("value")
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
  database.ref(`${root_tag}/${tag}`)
    .once("value")
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
    let odai = await database.ref(`${root_odai}/${odaiIds[i]}`).once("value")
    odais.push({
      id: odai.key,
      ...odai.val(),
    })
  }
  return odais
}

export default null