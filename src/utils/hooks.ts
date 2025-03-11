import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import {
  BlogPost,
  ProfessionalExperience,
  ProjectCard,
  URLProps,
} from "./models";
import { useAuthStore, useLandingPageStore } from "./store";
import {
  defaultBlogPosts,
  defaultProjectsData,
  defaultSocialMediaLinks,
  defaultWorkingExperience,
} from "./constants";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { useNavigate } from "react-router";

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

export const useSignIn = () => {
  const auth = getAuth();
  const { user, setUser } = useAuthStore();
  const navigateTo = useNavigate();

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const user = result.user;
      console.log("User signed in: ", user);
      setUser(user);
      navigateTo("/admin");
    } catch (error) {
      console.error("Error during sign-in: ", error);
      setUser(undefined);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully.");
      setUser(undefined);
    } catch (error) {
      console.error("Error during sign-out: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is already signed in: ", user);
        setUser(user);
        navigateTo("/admin");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return { user, handleSignIn, handleLogout };
};

export const useDewanshsQuotes = () => {
  const [randomQuote, setRandomQuote] = useState<string | undefined>();

  const getRandomQuote = (count: number) => {
    try {
      const quotes: string[] = [
        "Kyaa kijeyega itni dhan rashi ka?",
        "Tera bhi theek hai",
        "Seh lenge thoda?",
        "Control Dewansh, control!",
        "Itne pyaar se mt dekho meko, mei apna train of thought bhool jaata hoon!",
        "Ye bik gayi hai gormint!",
      ];

      if (count > quotes.length) {
        throw new Error(
          "Requested count exceeds the number of available quotes."
        );
      }

      // Shuffle the array using the Fisher-Yates shuffle algorithm
      const shuffledQuotes = [...quotes]; // Create a copy to avoid modifying the original
      for (let i = shuffledQuotes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuotes[i], shuffledQuotes[j]] = [
          shuffledQuotes[j],
          shuffledQuotes[i],
        ];
      }
      setRandomQuote(shuffledQuotes.slice(0, count)[0]);
    } catch (error) {
      console.error("An error occurred during building random quote", error);
      setRandomQuote("Meow, kyaa fatt gyaa 😭");
    }
  };

  useEffect(() => {
    getRandomQuote(1);
  }, []);

  return { randomQuote };
};
