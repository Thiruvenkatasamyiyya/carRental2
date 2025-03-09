// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhAQ65fqUPOp-G4s1aMpTjGJHMaAqNXAE",
  authDomain: "practice-app-cbb34.firebaseapp.com",
  projectId: "practice-app-cbb34",
  storageBucket: "practice-app-cbb34.firebasestorage.app",
  messagingSenderId: "1000077356310",
  appId: "1:1000077356310:web:3bd0e7a061e5f9c99b3437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

