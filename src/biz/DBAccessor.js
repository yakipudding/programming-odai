import { database } from '../config/FirebaseConfig'
import { getUid } from './Auth'
const odaisRef = database.ref('odais')
const odaiRef = odaiId => database.ref(`odais/${odaiId}`)
const tagOdaisRef = tag => database.ref(`tags/${tag}`)
const tagOdaiRef = (tag, odaiId) => database.ref(`tags/${tag}/${odaiId}`)
const likeUserOdaiRef = (uid, odaiId) => database.ref(`likes/${uid}/${odaiId}`)
const reportsRef = database.ref(`reports/`)
const reportTagRef = (tag, reportId) => database.ref(`reporttags/${tag}/${reportId}`)

// お題登録
export const insertOdai = async(odai, tags, callback) => {
  let uid = getUid()
  odaisRef.push(
    { ...odai,
      likecount: 0,
      likecountorder: 0,
      reportcount: 0,
      reportcountorder: 0,
      createuid: uid,
      createdate: - Date.now(),
    })
    .then((registerOdai) => {
      // tags登録
      setTags(registerOdai.key, tags.addtags, tags.deletetags)

      callback()
    })
    .catch((error) => {

    })
}

// お題編集：初期表示
export const getOdaiById = async (odaiId) => {
  let odai = await odaiRef(odaiId).once("value")
  return odai.val()
}

// お題編集：登録
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
    return tagOdaiRef(tag, odaiId).set(1)
  })
  deletetags.map((tag) => {
    return tagOdaiRef(tag, odaiId).remove()
  })
}

// お題詳細：いいね
export const setOdaiLike = (odaiId, like) => {
  let uid = getUid()
  let addLikeCount = like ? 1 : -1
  odaiRef(odaiId).once("value")
    .then((odai) => {
      let getOdai = odai.val()
      let likecount = getOdai.likecount + addLikeCount
      odaiRef(odaiId).update(
        { 
          ...getOdai,
          likecount: likecount,
          likecountorder: -likecount,
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

// お題詳細：初期表示
export const getOdaiByIdWithLike = async (odaiId) => {
  let uid = getUid()
  let odaiSnapShot = odaiRef(odaiId).once("value")
  // いいねしているかどうか
  let likeSnapShot = likeUserOdaiRef(uid, odaiId).once("value")
  // つくれぽ
  let reportsSnapShot = reportsRef
                          .orderByChild("odaiid").equalTo(odaiId)
                          .once("value")
  let primises = await Promise.all([odaiSnapShot, likeSnapShot, reportsSnapShot])
  
  let reports = []
  primises[2].forEach((report) => {
    reports.push({ id:report.key, ...report.val() })
  })

  return {
    ...primises[0].val(),
    like: primises[1].exists(),
    reports: reports
  }
}

// お題検索：人気のお題
export const getOdaisByMode = async (mode) => {
  let odais = []
  let odaisSnapShot = mode === 'polular' 
                        ? await odaisRef.orderByChild('likecountorder')
                          .limitToLast(10).once("value")
                        : await odaisRef.orderByChild('createdate')
                          .limitToLast(10).once("value")
  odaisSnapShot.forEach((odai) => {
    odais.push({id: odai.key, ...odai.val()})
  })
  //odaisからユーザがlikeしているかどうか取得
  let odaisWithLike = await getLikeByOdais(odais)
  return odaisWithLike
}

// odaisからユーザがlikeしているかどうか取得
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

// タグ検索
export const getOdaisByTag = async (tag, setOdais) => {
  let odaiIds = [];
  let tagOdais = await tagOdaisRef(tag).orderByChild('likecountorder')
                                       .limitToLast(10).once("value")
  tagOdais.forEach((odai) => {
    odaiIds.push(odai.key);
  })
  // odais取得
  let odais = await getOdaiByIds(odaiIds)
  return odais
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

// つくってみた
export const insertReport = (odaiId, odaiName, report, tags, callback) => {
  let uid = getUid()
  reportsRef.push(
    { ...report,
      odaiid: odaiId,
      odainame: odaiName,
      createuid: uid,
      username: 'ゲスト',
      createdate: - Date.now(),
    })
    .then((registerReporet) => {
      // tags登録
      setReportTags(registerReporet.key, tags)
      // レポート数登録
      addReportCount(odaiId)

      callback()
    })
    .catch((error) => {

    })
}

const setReportTags = (reportId, tags) => {
  tags.map((tag) => {
    reportTagRef(tag, reportId).set(1)
  })
  return
}

// レポート数
const addReportCount = (odaiId) => {
  odaiRef(odaiId).once("value")
    .then((odai) => {
      let getOdai = odai.val()
      let reportcount = getOdai.reportcount + 1
      odaiRef(odaiId).update(
        { 
          ...getOdai,
          reportcount: reportcount,
          reportcountorder: -reportcount,
        })
    });
}

export default null