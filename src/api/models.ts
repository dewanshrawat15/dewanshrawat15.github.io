type PortfolioState = 'Loading' | 'Loaded';

interface ISection {
    title: string;
    id: string;
    index: number;
}

interface HeroSection extends ISection {
    tagline: string;
    profileImageUrl: string;
}

interface AboutSection extends ISection {
    content: string;
}

interface ContactSection extends ISection {
    content: string;
}

export interface WebsiteData {
    sections: ISection[];
}

export type PortfolioStore = {
    websiteData: WebsiteData,
    state: PortfolioState,
    updateWebsiteData: (updatedData: WebsiteData) => void
}