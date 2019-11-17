import { auth } from '../config/FirebaseConfig'

// signIn/signOutするとonAuthStateChangedが発火
export const signIn = (email, password, callback) => {
  //firebase認証
  auth.signInWithEmailAndPassword(
    email,
    password
  ).then(() => {
    callback()
  }).catch((err) => {
    console.log(err)
  });
}

export const signOut = () => {
  auth.signOut();
}

export const onAuthStateChanged = (callback) => {
  //Firebase認証 状態が変わったら発火
  auth.onAuthStateChanged(
    (user) => {
      callback(user)
    }
  )
}

export const getUid = () => {
  return auth.currentUser.uid
}

export default null