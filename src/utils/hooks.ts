import { useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { ProfessionalExperience, URLProps } from "./models";
import { defaultSocialMediaLinks } from "../components/social-media-urls/constants";
import { defaultWorkingExperience } from "../components/experience/constants";
import { useLandingPageStore } from "./store";

export const useFirebaseData = () => {
  const {
    socialMediaLinks,
    workingExperience,
    setSocialMediaLinks,
    setWorkingExperience,
  } = useLandingPageStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [socialMediaSnapshot, experienceSnapshot] = await Promise.all([
          getDocs(collection(db, "socialMediaLinks")),
          getDocs(collection(db, "workingExperience")),
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

        setSocialMediaLinks(socialMediaData);
        setWorkingExperience(experienceData);
      } catch (error) {
        console.error("Error fetching data: ", error);
        console.error("Using static data");
        setSocialMediaLinks(defaultSocialMediaLinks);
        setWorkingExperience(defaultWorkingExperience);
      }
    };

    fetchData();
  }, []);

  return { socialMediaLinks, workingExperience };
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
