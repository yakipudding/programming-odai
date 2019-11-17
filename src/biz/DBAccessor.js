import { database } from '../config/FirebaseConfig'

export const getOdai = (odaiId, setOdaiValues) => {
  let ref = database.ref("odais/" + odaiId);
  ref.once("value")
    .then((odai) => {
      setOdaiValues(odai.val())
    });
  
}

export const insertOdai = (odai, callback) => {
  let odaiRef = database.ref('odais/')
  odaiRef.push({
      ...odai,
  }).then(() => {
      callback()
    })
    .catch((error) => {

    })
}

export const updateOdai = (odaiId, odai, callback) => {
  let odaiRef = database.ref('odais/' + odaiId)
  odaiRef.update({
      ...odai,
  }).then(() => {
    callback()
    })
    .catch((error) => {
    })
}

export default null