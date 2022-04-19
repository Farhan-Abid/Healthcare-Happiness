// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2TdhWEMfBPjs_lmWgzcY3dgz3OfUwmkA",
  authDomain: "healthcare-app-8652f.firebaseapp.com",
  projectId: "healthcare-app-8652f",
  storageBucket: "healthcare-app-8652f.appspot.com",
  messagingSenderId: "131310665052",
  appId: "1:131310665052:web:b035d1d778c5c459515599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;