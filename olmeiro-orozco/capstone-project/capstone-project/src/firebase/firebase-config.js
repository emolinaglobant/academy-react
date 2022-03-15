import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
const firebaseConfig = {
  apiKey: "AIzaSyAtvOnhOC4mu7IPOPx1-O-Ywn2LeKuIed8",
  authDomain: "capstone-project-3687c.firebaseapp.com",
  projectId: "capstone-project-3687c",
  storageBucket: "capstone-project-3687c.appspot.com",
  messagingSenderId: "451784220964",
  appId: "1:451784220964:web:3461be4655dc8b0a0553b1"
};

initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}