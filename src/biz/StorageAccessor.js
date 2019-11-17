import { storage } from '../config/FirebaseConfig'
import { getUid } from './Auth'

export const registerImage = (file, callback) => {
  let uid = getUid()
  let ts = (parseInt(new Date() / 1000)).toString();
  let filename = file.name
  
  var ref = storage.ref().child(`images/${uid}/${ts}_${filename}`);
    ref.put(file).then((image) => {
      //url取得
      ref.getDownloadURL().then((url) => {
        callback(filename, url)
      })
    });
}

export default null