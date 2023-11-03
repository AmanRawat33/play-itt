// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP10WZtrlVu7xPtYisVGYZQ7DvIFY9JW8",
  authDomain: "play-itt.firebaseapp.com",
  projectId: "play-itt",
  storageBucket: "play-itt.appspot.com",
  messagingSenderId: "209909481648",
  appId: "1:209909481648:web:b51a47d00ce85830ffbb75",
  measurementId: "G-9X08TW5F8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
