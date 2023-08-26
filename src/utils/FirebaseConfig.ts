// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore"

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCwvGqkE7HhJS70yl8dieOottWnrZS1DRQ",
  authDomain: "zoom-clone-ac3ad.firebaseapp.com",
  projectId: "zoom-clone-ac3ad",
  storageBucket: "zoom-clone-ac3ad.appspot.com",
  messagingSenderId: "177407097244",
  appId: "1:177407097244:web:b283c40201fb830ac7f059",
  measurementId: "G-BR78BH06KT"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export  const firebaseDB = getFirestore(app)

export const userRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings")