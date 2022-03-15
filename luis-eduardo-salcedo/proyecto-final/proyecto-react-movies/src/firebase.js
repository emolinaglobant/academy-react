// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// : Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUmgYZCkh2uHiiO9WOwCh5od8cvXvghYw",
    authDomain: "react-fb-auth-b9e9f.firebaseapp.com",
    projectId: "react-fb-auth-b9e9f",
    storageBucket: "react-fb-auth-b9e9f.appspot.com",
    messagingSenderId: "598083072423",
    appId: "1:598083072423:web:3b6587cb44e6fa94944682"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();
const googleAuthProvider = new  firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new  firebase.auth.FacebookAuthProvider();

export  {auth, googleAuthProvider, facebookAuthProvider}
