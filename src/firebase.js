import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_1SnKMvYlORcaEcw0jf6XJxyxj8ptQzw",
  authDomain: "the-jersey-store.firebaseapp.com",
  projectId: "the-jersey-store",
  storageBucket: "the-jersey-store.firebasestorage.app",
  messagingSenderId: "625270771659",
  appId: "1:625270771659:web:bba5b4f368402e2648b04e"
};

// ✅ Initialize app
const app = initializeApp(firebaseConfig);

// ✅ Export services (THIS WAS MISSING)
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);