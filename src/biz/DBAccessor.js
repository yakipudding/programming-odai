import { database } from '../config/FirebaseConfig'
import { getUid } from './Auth'
const odaisRef = database.ref('odais')
const odaiRef = odaiId => database.ref(`odais/${odaiId}`)
const tagOdaisRef = tag => database.ref(`tags/${tag}`)
const tagOdaiRef = (tag, odaiId) => database.ref(`tags/${tag}/${odaiId}`)
const likeUserOdaiRef = (uid, odaiId) => database.ref(`likes/${uid}/${odaiId}`)
// let uid = getUid()

// insert/update
export const insertOdai = (odai, tags, callback) => {
  let uid = getUid()
  odaisRef.push(
    { ...odai,
      likecount: 0,
      createuser: uid,
     })
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

export const setOdaiLike = (odaiId, like) => {
  let uid = getUid()
  let addLikeCount = like ? 1 : -1
  odaiRef(odaiId).once("value")
    .then((odai) => {
      let getOdai = odai.val()
      // odai.likecount
      odaiRef(odaiId).update(
        { 
          ...getOdai,
          likecount: getOdai.likecount + addLikeCount
        })
      // like
      if(like){
        likeUserOdaiRef(uid, odaiId).set(1)
      }
      else{
        likeUserOdaiRef(uid, odaiId).remove()
      }
    });
}

// select
export const getOdaiById = (odaiId, setOdaiValues) => {
  odaiRef(odaiId).once("value")
    .then((odai) => {
      setOdaiValues(odai.val())
    });
}

export const getOdaiByIdWithLike = (odaiId, setOdaiValues) => {
  let uid = getUid()
  odaiRef(odaiId).once("value")
    .then((odai) => {
      likeUserOdaiRef(uid, odaiId).once("value")
        .then((like) => {
          let odaival = odai.val()
          setOdaiValues({
            ...odaival,
            like: like.exists(),
          })
        })
    });
}

export const getOdaisWithLike = (setOdais) => {
  odaisRef.once("value")
    .then((odaisSnapShot) => {
      let odais = []
      odaisSnapShot.forEach((odai) =>{
        odais.push({id: odai.key, ...odai.val()})
        //like取得
        getLikeByOdais(odais).then((odaiswithlike) => {
          setOdais(odaiswithlike);
        })
      })
    });
}

const getLikeByOdais = async (odais) => {
  let odaiswithlike = [];
  let uid = getUid()
  for (let i = 0; i < odais.length; i++){
    let odai = odais[i]
    let like = await likeUserOdaiRef(uid, odai.id).once("value")
    odaiswithlike.push({
      id: odai.id,
      ...odai,
      like: like.exists(),
    });
  }
  return odaiswithlike
}

export const getOdaisByTag = (tag, setOdais) => {
  tagOdaisRef(tag).once("value")
    .then((tagOdais) => {
      let odaiIds = [];
      tagOdais.forEach((odai) => {
        odaiIds.push(odai.key);
      })
      // odais取得
      getOdaiByIds(odaiIds).then((odais) => {
        setOdais(odais)
      })
    });
}

const getOdaiByIds = async (odaiIds) => {
  let odais = [];
  let uid = getUid()
  for (let i = 0; i < odaiIds.length; i++){
    let odaiId = odaiIds[i]
    let odai = await odaiRef(odaiId).once("value")
    let like = await likeUserOdaiRef(uid, odaiId).once("value")
    odais.push({
      id: odaiId,
      ...odai.val(),
      like: like.exists(),
    })
  }
  return odais
}

export default null