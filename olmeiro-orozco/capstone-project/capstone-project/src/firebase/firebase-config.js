import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
// const firebaseConfig = {
//   apiKey: "AIzaSyCP2AsXlQnr28nA1YAINskW44vt_oqQBYA",
//   authDomain: "trivia-app-313f7.firebaseapp.com",
//   projectId: "trivia-app-313f7",
//   storageBucket: "trivia-app-313f7.appspot.com",
//   messagingSenderId: "692999564801",
//   appId: "1:692999564801:web:4619896feb44004350da00"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAtvOnhOC4mu7IPOPx1-O-Ywn2LeKuIed8",
  authDomain: "capstone-project-3687c.firebaseapp.com",
  projectId: "capstone-project-3687c",
  storageBucket: "capstone-project-3687c.appspot.com",
  messagingSenderId: "451784220964",
  appId: "1:451784220964:web:3461be4655dc8b0a0553b1"
};

const firebaseApp = initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}