import { IconDefinition, faFacebookF, faGithub, faInstagram, faLinkedinIn, faMedium, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export type IconType = 'github' | 'linkedin' | 'email' | 'spotify' | 'telephone' | 'facebook' | 'instagram' | 'medium';

export class IconsHelper {

    getIcon = (iconName: IconType): IconDefinition | null => {
        switch (iconName) {
            case 'github':
                return faGithub;
            case 'telephone':
                return faPhone;
            case 'linkedin':
                return faLinkedinIn;
            case 'email':
                return faEnvelope;
            case 'spotify':
                return faSpotify;
            case 'facebook':
                return faFacebookF;
            case 'instagram':
                return faInstagram;
            case 'medium':
                return faMedium;
            default:
                return null;
        }
    }
}