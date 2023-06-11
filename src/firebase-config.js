// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApehOSJfiWs1Qt-Rr0H_INmMIE6IzWJeA",
  authDomain: "hearty-meal-02.firebaseapp.com",
  projectId: "hearty-meal-02",
  storageBucket: "hearty-meal-02.appspot.com",
  messagingSenderId: "165633363308",
  appId: "1:165633363308:web:01a676c23d1ceebe2fb749",
  measurementId: "G-WNTE2YH2WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);