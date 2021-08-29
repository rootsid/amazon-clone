import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGZEZtnsm0GQXj488ETOx9Q-qCfK53goA",
    authDomain: "clone-62adf.firebaseapp.com",
    projectId: "clone-62adf",
    storageBucket: "clone-62adf.appspot.com",
    messagingSenderId: "156353551141",
    appId: "1:156353551141:web:b26687110e151098a298cc",
    measurementId: "G-YEZ3R7SXJ1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth()

export { db, auth };