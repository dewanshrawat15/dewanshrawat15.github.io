import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYRqfJ-hEWLU8q6e3mxn5ot9jQo2rqwp0",
    authDomain: "portfolio-0011.firebaseapp.com",
    databaseURL: "https://portfolio-0011.firebaseio.com",
    projectId: "portfolio-0011",
    storageBucket: "portfolio-0011.appspot.com",
    messagingSenderId: "658893334394",
    appId: "1:658893334394:web:b38c4a89b528b49ec4d8c3"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}

const db = firebase.firestore();

export const getDetails = async () => {
    const detailsRef = db.collection("details");
    const detailsDocRef = await detailsRef.doc("details").get();
    const contentDocRef = await detailsRef.doc("content").get();
    let detailsData, contentData;
    detailsData = await detailsDocRef.data();
    contentData = await contentDocRef.data();
    let detailsMap = new Map();
    for (const key in detailsData) {
        detailsMap[key] = detailsData[key];
    }
    for (const key in contentData) {
        detailsMap[key] = contentData[key];
    }
    return detailsMap;
}

export const getProjects = async () => {
    const projectCollection = db.collection("projects");
    const featuredProjectCollection = db.collection("featured-projects");
    const projectCollectionRef = await projectCollection.get();
    const featuredProjectCollectionRef = await featuredProjectCollection.get();
    const projectDocs = projectCollectionRef.docs;
    const featuredProjectsDocs = featuredProjectCollectionRef.docs;
    let projectDetails = [], featuredProjectDetails = [];
    for (let index = 0; index < projectDocs.length; index++) {
        let projectData = projectDocs[index].data();
        projectDetails.push(projectData);
    }
    projectDetails.sort((a, b) => {
        return a["id"] - b["id"];
    });
    for (let index = 0; index < featuredProjectsDocs.length; index++) {
        let projectData = featuredProjectsDocs[index].data();
        featuredProjectDetails.push(projectData);
    }
    featuredProjectDetails.sort((a, b) => {
        return a["id"] - b["id"];
    });
    let projectMap = new Map();
    projectMap["featured-projects"] = featuredProjectDetails;
    projectMap["projects"] = projectDetails;
    return projectMap;
}