
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA80dQUpIKIo-NxVifqLRR8MdeOQM029jg",
  authDomain: "recipeas-4e8c9.firebaseapp.com",
  projectId: "recipeas-4e8c9",
  storageBucket: "recipeas-4e8c9.appspot.com",
  messagingSenderId: "995451456189",
  appId: "1:995451456189:web:1b61430faaf74b93a305d4",
  measurementId: "G-M4JT4TRTY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();