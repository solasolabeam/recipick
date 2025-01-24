// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCleariJMTm2aVZzSEkrts1qS8KFxjyFf8",
  authDomain: "recipick-bade1.firebaseapp.com",
  projectId: "recipick-bade1",
  storageBucket: "recipick-bade1.firebasestorage.app",
  messagingSenderId: "514273868222",
  appId: "1:514273868222:web:175d7b2d52cc448e5721ef",
  measurementId: "G-WBZE1YCT6T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
