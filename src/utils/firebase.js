import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyAYRqfJ-hEWLU8q6e3mxn5ot9jQo2rqwp0",
    authDomain: "portfolio-0011.firebaseapp.com",
    databaseURL: "https://portfolio-0011.firebaseio.com",
    projectId: "portfolio-0011",
    storageBucket: "portfolio-0011.appspot.com",
    messagingSenderId: "658893334394",
    appId: "1:658893334394:web:b38c4a89b528b49ec4d8c3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getHeroData = async () => {
    const detailsColl = collection(db, 'details');
    const detailSnapshot = await getDocs(detailsColl);
    const details = detailSnapshot.docs.map(doc => doc.data());
    return details;
}

export const getWebsiteData = async () => {
    let details = {};
    const heroData = await getHeroData();
    details["hero"] = heroData;
    return details;
}