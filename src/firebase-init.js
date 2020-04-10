import firebaseConfig from "./firebase-config";
import firebase from "firebase";
import "firebase/firestore";


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;