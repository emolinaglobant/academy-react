// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6GDGIG0lJ6mgDVIIT2w21nQOOWRRpBm8",
  authDomain: "project-final-globant.firebaseapp.com",
  projectId: "project-final-globant",
  storageBucket: "project-final-globant.appspot.com",
  messagingSenderId: "544168496913",
  appId: "1:544168496913:web:1403449a338fd9b303c6b0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
