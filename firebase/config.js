import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import "firebase/compat/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDg0hsh0NZLIsABJMfG-xLIJdU6U_A82O0",
  authDomain: "reakt-native.firebaseapp.com",
  projectId: "reakt-native",
  storageBucket: "reakt-native.appspot.com",
  messagingSenderId: "919611927192",
  appId: "1:919611927192:web:89691bf6454442cfa3beed",
  measurementId: "G-K04TK6EPPB",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const storage = firebase.storage();

export { auth, db, storage };