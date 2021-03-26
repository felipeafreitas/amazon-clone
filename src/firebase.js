// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvVj1IBhgbwkqDQnSsrJw3YVlawxHzGfY",
  authDomain: "clone-6d05b.firebaseapp.com",
  projectId: "clone-6d05b",
  storageBucket: "clone-6d05b.appspot.com",
  messagingSenderId: "683851439236",
  appId: "1:683851439236:web:c2866695fa84e224ecb6d1",
  measurementId: "G-6Z5XG4Q199",
});

const db = firebase.firestore();

export { db };
