import { auth } from '../config/FirebaseConfig'

// signIn/signOutするとWrapperのfirebase.auth().onAuthStateChangedが発火
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

export default null