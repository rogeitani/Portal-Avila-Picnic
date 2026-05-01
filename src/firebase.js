import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, onSnapshot, addDoc, getDoc } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBGrSP7Uf1L6LKSXaUNK-1qlDMRmkOO7g",
    authDomain: "gestion-avila-picnic.firebaseapp.com",
    projectId: "gestion-avila-picnic",
    storageBucket: "gestion-avila-picnic.appspot.com",
    messagingSenderId: "540111548101",
    appId: "1:540111548101:web:0b5b8be3f245ed9b2ecaac"
};

// Constants for Routes
export const ADMIN_APP_ID = "1:540111548101:web:0b5b8be3f245ed9b2ecaac";
export const ADMIN_USER_ID = "shared-avila-picnic-user";
export const INVENTORY_PATH = `artifacts/${ADMIN_APP_ID}/users/${ADMIN_USER_ID}/appData/inventory`;
export const REQUESTS_PATH = `artifacts/${ADMIN_APP_ID}/users/${ADMIN_USER_ID}/requests`;

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Silent Anonymous Sign-In
signInAnonymously(auth)
  .then(() => {
    console.log("Authenticated anonymously with Firebase");
  })
  .catch((error) => {
    console.error("Firebase Auth Error:", error);
  });
