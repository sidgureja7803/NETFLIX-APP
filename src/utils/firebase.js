// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsbSWTCCoYUoWh4yVdSn9fjSWrUS1ToqI",
  authDomain: "netflix-gpt-c9d90.firebaseapp.com",
  projectId: "netflix-gpt-c9d90",
  storageBucket: "netflix-gpt-c9d90.appspot.com",
  messagingSenderId: "643596115751",
  appId: "1:643596115751:web:20fdd75a5cb00f3a4ed302",
  measurementId: "G-G850YRFZNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
