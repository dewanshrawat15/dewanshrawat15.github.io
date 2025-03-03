// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = process.env.REACT_APP_API_KEY;
const authDomain = process.env.REACT_AUTH_DOMAIN;
const databaseURL = process.env.REACT_DATABASE_URL;
const projectId = process.env.REACT_PROJECT_ID;
const storageBucket = process.env.REACT_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_MESSAGE_SENDER_ID;
const appId = process.env.REACT_APP_ID;

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
