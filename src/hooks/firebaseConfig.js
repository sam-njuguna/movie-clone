import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDewzoKgwKgfQk_yobEMsjhZJc-GODfUTI",
  authDomain: "movie-39.firebaseapp.com",
  projectId: "movie-39",
  storageBucket: "movie-39.appspot.com",
  messagingSenderId: "960173928093",
  appId: "1:960173928093:web:fcf6ed556df581f0046e74",
  measurementId: "G-GL2W185183",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GithubAuthProvider();
