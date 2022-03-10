import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAORdwkoSFBsuiS3EismEYb72KnKGEojbc",
    authDomain: "react-academy-finalproject.firebaseapp.com",
    projectId: "react-academy-finalproject",
    storageBucket: "react-academy-finalproject.appspot.com",
    messagingSenderId: "429206574517",
    appId: "1:429206574517:web:78c96191b88724ace435fc",
    measurementId: "G-8NZ7QFJ0QQ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth, fs, storage};