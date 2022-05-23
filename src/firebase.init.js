// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUmuWQWDhtA99eD5P5cCW_eNh306EsRPo",
  authDomain: "bike-manufacture.firebaseapp.com",
  projectId: "bike-manufacture",
  storageBucket: "bike-manufacture.appspot.com",
  messagingSenderId: "138353448386",
  appId: "1:138353448386:web:90e8cbab6c98301cc5325b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;