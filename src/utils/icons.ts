import { IconDefinition, faGithub, faGoogle, faLinkedinIn, faSpotify } from "@fortawesome/free-brands-svg-icons";

export type IconType = 'github' | 'linkedin' | 'email' | 'spotify';

export class IconsHelper {

    getIcon = (iconName: IconType): IconDefinition | null => {
        switch (iconName) {
            case 'github':
                return faGithub;
            case 'linkedin':
                return faLinkedinIn;
            case 'email':
                return faGoogle;
            case 'spotify':
                return faSpotify;
            default:
                return null;
        }
    }
}