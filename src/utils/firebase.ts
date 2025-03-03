// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY as string;
const authDomain = import.meta.env.VITE_REACT_APP_AUTH_DOMAIN as string;
const databaseURL = import.meta.env.VITE_REACT_APP_DATABASE_URL as string;
const projectId = import.meta.env.VITE_REACT_APP_PROJECT_ID as string;
const storageBucket = import.meta.env.VITE_REACT_APP_STORAGE_BUCKET as string;
const messagingSenderId = import.meta.env
  .VITE_REACT_APP_MESSAGING_SENDER_ID as string;
const appId = import.meta.env.VITE_REACT_APP_ID as string;

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
