import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-2024.firebaseapp.com",
  projectId: "revents-2024",
  storageBucket: "revents-2024.appspot.com",
  messagingSenderId: "1061398448628",
  appId: "1:1061398448628:web:dae46d6506ed15f04f91a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
