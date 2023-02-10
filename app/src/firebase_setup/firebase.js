import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIhSpiGqGTLPr0CMVhdyBOlsCBEzIGgWc",
  authDomain: "react-5fb04.firebaseapp.com",
  projectId: "react-5fb04",
  storageBucket: "react-5fb04.appspot.com",
  messagingSenderId: "425544990871",
  appId: "1:425544990871:web:12600e5b742b1c2667a9d2",
  measurementId: "G-5FCQ9PYWY7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
