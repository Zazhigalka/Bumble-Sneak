// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZgJoQ3euGVCAMv_JGNUkImahCrAjleNs",
  authDomain: "sultan-sneakstore.firebaseapp.com",
  projectId: "sultan-sneakstore",
  storageBucket: "sultan-sneakstore.appspot.com",
  messagingSenderId: "77687576663",
  appId: "1:77687576663:web:7f993b234ba334cb9f6b12",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
