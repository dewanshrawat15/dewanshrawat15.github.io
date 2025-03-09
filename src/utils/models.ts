export type URLType =
  | "facebook"
  | "linkedin"
  | "instagram"
  | "spotify"
  | "github"
  | "mail";

export interface URLProps {
  url: string;
  type: URLType;
}

export interface ProfessionalExperience {
  position: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  description: string;
}

export interface ProjectCard {
  github?: string;
  id: number;
  logoUrl?: string;
  projectTitle: string;
  projectTagline: string;
}
