import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import "firebase/compat/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDg0hsh0NZLIsABJMfG-xLIJdU6U_A82O0",
  authDomain: "reakt-native.firebaseapp.com",
  databaseURL: "https://reakt-native-default-rtdb.firebaseio.com",
  projectId: "reakt-native",
  storageBucket: "reakt-native.appspot.com",
  messagingSenderId: "919611927192",
  appId: "1:919611927192:web:77d127e431d8fec3a3beed",
  measurementId: "G-7X2ZS54DTW"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const storage = firebase.storage();

export { auth, db, storage };