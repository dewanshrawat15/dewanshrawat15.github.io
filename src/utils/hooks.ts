import { useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
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
        const socialMediaSnapshot = collection(db, "socialMediaLinks");
        const experienceSnapshot = collection(db, "workingExperience");
        const socialMediaData = (await getDocs(socialMediaSnapshot)).docs.map(
          (doc) => {
            return doc.data() as URLProps;
          }
        );
        const experienceData = (await getDocs(experienceSnapshot)).docs.map(
          (doc) => {
            return doc.data() as ProfessionalExperience;
          }
        );

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
