import { create } from "zustand";
import { ProfessionalExperience, URLProps } from "./models";

interface LandingPageStore {
  socialMediaLinks: URLProps[];
  setSocialMediaLinks: (links: URLProps[]) => void;
  workingExperience: ProfessionalExperience[];
  setWorkingExperience: (exp: ProfessionalExperience[]) => void;
}

export const useLandingPageStore = create<LandingPageStore>((set) => ({
  socialMediaLinks: [],
  workingExperience: [],
  setSocialMediaLinks: (newLinks: URLProps[]) =>
    set({ socialMediaLinks: newLinks }),
  setWorkingExperience: (newExp: ProfessionalExperience[]) =>
    set({ workingExperience: newExp }),
}));
