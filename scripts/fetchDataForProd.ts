import { writeFileSync } from "fs";
import path from "path";
import "dotenv/config";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { fileURLToPath } from "url";

const apiKey = process.env.VITE_REACT_APP_API_KEY;
const authDomain = process.env.VITE_REACT_APP_AUTH_DOMAIN;
const databaseURL = process.env.VITE_REACT_APP_DATABASE_URL;
const projectId = process.env.VITE_REACT_APP_PROJECT_ID;
const storageBucket = process.env.VITE_REACT_APP_STORAGE_BUCKET;
const messagingSenderId = process.env.VITE_REACT_APP_MESSAGING_SENDER_ID;
const appId = process.env.VITE_REACT_APP_ID;

// Check if environment variables are loaded.  Crucial for debugging!
if (!apiKey || !authDomain || !projectId) {
  console.error(
    "ERROR: Missing Firebase environment variables.  Make sure your .env file is set up correctly."
  );
  process.exit(1); // Exit the script with an error code
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const buildFirebaseProdDataForProd = async () => {
  const [
    socialMediaSnapshot,
    experienceSnapshot,
    projectsSnapshot,
    blogSnapshot,
  ] = await Promise.all([
    getDocs(collection(db, "socialMediaLinks")),
    getDocs(collection(db, "workingExperience")),
    getDocs(collection(db, "projects")),
    getDocs(collection(db, "blogs")),
  ]);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const utilsPath = path.join(__dirname, "../src/utils/constants.ts");

  // Extract data from snapshots
  const socialMediaData = socialMediaSnapshot.docs.map((doc) => {
    return doc.data();
  });

  const experienceData = experienceSnapshot.docs.map((doc) => {
    const docData = doc.data();
    const startDateTimestamp: Timestamp = docData.startDate;
    const endDateTimestamp: Timestamp = docData.endDate;
    return {
      ...docData,
      startDate: startDateTimestamp.toDate(),
      endDate: endDateTimestamp?.toDate(),
    };
  });
  const projectsData = projectsSnapshot.docs.map((doc) => {
    const docData = doc.data();
    return {
      ...docData,
      id: parseInt(docData.id),
    };
  });
  const blogsData = blogSnapshot.docs.map((doc) => doc.data());

  // Define default objects
  const defaultSocialMediaLinks = socialMediaData;
  const defaultWorkingExperience = experienceData;
  const defaultProjectsData = projectsData;
  const defaultBlogPosts = blogsData;

  // Write to src/utils.ts
  const content = `
export const defaultSocialMediaLinks = ${JSON.stringify(
    defaultSocialMediaLinks,
    null,
    2
  )};
export const defaultWorkingExperience = ${JSON.stringify(
    defaultWorkingExperience,
    null,
    2
  )};
export const defaultProjectsData = ${JSON.stringify(
    defaultProjectsData,
    null,
    2
  )};
export const defaultBlogPosts = ${JSON.stringify(defaultBlogPosts, null, 2)};
`;

  writeFileSync(utilsPath, content, { flag: "w" });
  console.log("Data written to file");
  process.exit(0);
};

buildFirebaseProdDataForProd();
