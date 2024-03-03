import { create } from "zustand";
import { PortfolioStore, WebsiteData } from "./models";

export const useWebsiteData = create<PortfolioStore>()((set) => ({
    websiteData: {
        sections: []
    },
    state: 'Loading',
    updateWebsiteData: (updatedData: WebsiteData) => set({
        websiteData: updatedData
    })
}))