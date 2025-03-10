import { useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import {
  BlogPost,
  ProfessionalExperience,
  ProjectCard,
  URLProps,
} from "./models";
import { useLandingPageStore } from "./store";
import {
  defaultBlogPosts,
  defaultProjectsData,
  defaultSocialMediaLinks,
  defaultWorkingExperience,
} from "./constants";

export const useFirebaseData = () => {
  const { setSocialMediaLinks, setWorkingExperience, setProjects, setBlogs } =
    useLandingPageStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (import.meta.env.MODE === "production") {
          throw new Error("Don't fetch data in production.");
        }
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

        const socialMediaData = socialMediaSnapshot.docs.map((doc) => {
          return doc.data() as URLProps;
        });

        const experienceData = experienceSnapshot.docs.map((doc) => {
          const docData = doc.data();
          const startDateTimestamp: Timestamp = docData.startDate;
          const endDateTimestamp: Timestamp | undefined = docData.endDate;
          return {
            ...docData,
            startDate: startDateTimestamp.toDate(),
            endDate: endDateTimestamp?.toDate(),
          } as ProfessionalExperience;
        });
        const projectsData = projectsSnapshot.docs.map((doc) => {
          return doc.data() as ProjectCard;
        });
        const blogsData = blogSnapshot.docs.map(
          (doc) => doc.data() as BlogPost
        );

        setSocialMediaLinks(socialMediaData);
        setWorkingExperience(experienceData);
        setProjects(projectsData);
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
        console.error("Using static data");
        setSocialMediaLinks(defaultSocialMediaLinks as URLProps[]);
        const workingExperience = defaultWorkingExperience.map((doc) => {
          return {
            ...doc,
            startDate: new Date(doc.startDate),
            endDate: doc.endDate ? new Date(doc.endDate) : undefined,
          };
        });
        setWorkingExperience(workingExperience);
        setProjects(defaultProjectsData);
        setBlogs(defaultBlogPosts);
      }
    };

    fetchData();
  }, []);

  return {};
};

export const setInitialData = async () => {
  try {
    console.info("Setter functions have been commented out for now");
    // const socialMediaRef = collection(db, "socialMediaLinks");
    // const workingExperienceRef = collection(db, "workingExperience");

    // const socialMediaLinksPromises = defaultSocialMediaLinks.map((link) => {
    //   const docRef = doc(socialMediaRef, link.type);
    //   return setDoc(docRef, link);
    // });
    // await Promise.all(socialMediaLinksPromises);
    // const experiencePromises = defaultWorkingExperience.map((experience) => {
    //   const docRef = doc(workingExperienceRef, experience.company);
    //   return setDoc(docRef, experience);
    // });
    // await Promise.all(experiencePromises);
  } catch (e) {
    console.error("Error setting initial data: ", e);
  }
};
