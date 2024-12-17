// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6RdYYOnVLoGUWHrInu0k30Cqz81Mlqco",
  authDomain: "vite-contact-e818b.firebaseapp.com",
  projectId: "vite-contact-e818b",
  storageBucket: "vite-contact-e818b.firebasestorage.app",
  messagingSenderId: "356418078229",
  appId: "1:356418078229:web:81ec04a47bd4972592701c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
