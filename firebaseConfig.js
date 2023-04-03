// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbm53eUTMkdANWOb3Hk558b1Jt_ORypNE",
  authDomain: "fut-tv-9500b.firebaseapp.com",
  projectId: "fut-tv-9500b",
  storageBucket: "fut-tv-9500b.appspot.com",
  messagingSenderId: "1029584064900",
  appId: "1:1029584064900:web:d47f98b7b7e1906ecc4dd1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth()

export { auth };