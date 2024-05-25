export type IconType = 'github' | 'linkedin' | 'email' | 'spotify' | 'telephone' | 'facebook' | 'instagram' | 'medium';

export interface IconProps {
    name: IconType;
    url: string;
}

export interface DimensionProps {
    width: number;
    height: number;
}

interface HeroSection {
    name: string;
    subtitle: string;
    resumeUrl: string;
}

interface AboutSection {
    title: string;
    content: string;
}

export interface ExperienceItem {
    position: string;
    company: string;
    index: number;
    content: string;
    startDate: number;
    endDate?: number;
}

interface ExperienceSection {
    title: string;
    experience: ExperienceItem[];
}

interface ContactSection {
    title: string;
    subtitle: string;
    socialIcons: IconProps[];
}

export interface PortfolioWebsiteModel {
    heroSection: HeroSection;
    aboutSection: AboutSection;
    experienceSection: ExperienceSection;
    contactSection: ContactSection;
}
