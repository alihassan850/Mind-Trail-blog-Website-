// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCO5_RevjF0hz5rWaTI5taZ750XMBt5OzU",
  authDomain: "periodic-table-7970f.firebaseapp.com",
  projectId: "periodic-table-7970f",
  storageBucket: "periodic-table-7970f.firebasestorage.app",
  messagingSenderId: "979987379804",
  appId: "1:979987379804:web:69803f42d208f03dc09899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export database
export { db };