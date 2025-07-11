import { create } from "zustand";
import {
  BlogPost,
  ProfessionalExperience,
  ProjectCard,
  URLProps,
} from "./models";
import { User } from "firebase/auth";

interface LandingPageStore {
  socialMediaLinks: URLProps[];
  setSocialMediaLinks: (links: URLProps[]) => void;
  workingExperience: ProfessionalExperience[];
  setWorkingExperience: (exp: ProfessionalExperience[]) => void;
  projects: ProjectCard[];
  setProjects: (newProjects: ProjectCard[]) => void;
  blogPosts: BlogPost[];
  setBlogs: (blogItems: BlogPost[]) => void;
}

export const useLandingPageStore = create<LandingPageStore>((set) => ({
  socialMediaLinks: [],
  workingExperience: [],
  projects: [],
  setProjects: (newProjects) => set({ projects: newProjects }),
  setSocialMediaLinks: (newLinks: URLProps[]) =>
    set({ socialMediaLinks: newLinks }),
  setWorkingExperience: (newExp: ProfessionalExperience[]) =>
    set({ workingExperience: newExp }),
  blogPosts: [],
  setBlogs: (blogItems) => set({ blogPosts: blogItems }),
}));

interface AuthStore {
  user?: User;
  setUser: (user?: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: undefined,
  setUser: (newUser?: User) => set({ user: newUser }),
}));
