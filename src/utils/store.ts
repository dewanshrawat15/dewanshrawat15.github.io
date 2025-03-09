import { create } from "zustand";
import { ProfessionalExperience, ProjectCard, URLProps } from "./models";

interface LandingPageStore {
  socialMediaLinks: URLProps[];
  setSocialMediaLinks: (links: URLProps[]) => void;
  workingExperience: ProfessionalExperience[];
  setWorkingExperience: (exp: ProfessionalExperience[]) => void;
  projects: ProjectCard[];
  setProjects: (newProjects: ProjectCard[]) => void;
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
}));
