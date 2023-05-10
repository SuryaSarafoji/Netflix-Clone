// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwrjyf_8aXObQMr8z_f0ikoMU94GcGdxQ",
  authDomain: "netflix-d47fe.firebaseapp.com",
  projectId: "netflix-d47fe",
  storageBucket: "netflix-d47fe.appspot.com",
  messagingSenderId: "857780291658",
  appId: "1:857780291658:web:1aa9bc9fb2dda21f41feb3",
  measurementId: "G-FJP371Z96Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
