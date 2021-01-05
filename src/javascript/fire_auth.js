import firebase from "./firebase.js";

class AuthService {
  googleLogin() {
    const provider = firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  }
}

export default AuthService;
