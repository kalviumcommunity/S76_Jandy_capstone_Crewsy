// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Replace these values with your actual Firebase config:
const firebaseConfig = {
  apiKey: "AIzaSyAuXxN2gyjYBJgTC3XNtqcO0CzzcnTept4",
  authDomain: "crewsy-7256b.firebaseapp.com",
  projectId: "crewsy-7256b",
  storageBucket: "crewsy-7256b.firebasestorage.app",
  messagingSenderId: "361776558543",
  appId: "1:361776558543:web:c4e55434c3f62fe73aa2ba",
  measurementId: "G-RSKCM74NHG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
