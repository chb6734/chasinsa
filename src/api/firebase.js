import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  setPersistence,
  onAuthStateChanged,
  browserSessionPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

//세션 종료시 로그 아웃되도록 연구 중
// setPersistence(auth, sessionStorage)
//   .then(() => {
//     const provider = new GoogleAuthProvider();
//     // In memory persistence will be applied to the signed in Google user
//     // even though the persistence was set to 'none' and a page redirect
//     // occurred.
//     return signInWithRedirect(auth, provider);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export function login() {
  signInWithPopup(auth, provider).catch((error) => {
    // Handle Errors here
    console.error;
  });
}
export function logout() {
  signOut(auth);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
