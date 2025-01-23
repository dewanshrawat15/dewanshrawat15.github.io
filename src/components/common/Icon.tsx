import {
  faFacebook,
  faGithubSquare,
  faInstagram,
  faLinkedin,
  faMedium,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconType } from "./types";

export const Icon: React.FC<{ icon: iconType }> = ({ icon }) => {
  switch (icon) {
    case "facebook":
      return (
        <FontAwesomeIcon
          className="text-2xl sm:text-3xl md:text-4xl hover:text-indigo hover:scale-125 transition-all duration-200"
          icon={faFacebook}
        />
      );
    case "instagram":
      return (
        <FontAwesomeIcon
          className="text-2xl sm:text-3xl md:text-4xl hover:text-indigo hover:scale-125 transition-all duration-200"
          icon={faInstagram}
        />
      );
    case "linkedin":
      return (
        <FontAwesomeIcon
          className="text-2xl sm:text-3xl md:text-4xl hover:text-indigo hover:scale-125 transition-all duration-200"
          icon={faLinkedin}
        />
      );
    case "medium":
      return (
        <FontAwesomeIcon
          className="text-2xl sm:text-3xl md:text-4xl hover:text-indigo hover:scale-125 transition-all duration-200"
          icon={faMedium}
        />
      );
    case "spotify":
      return (
        <FontAwesomeIcon
          className="text-2xl sm:text-3xl md:text-4xl hover:text-indigo hover:scale-125 transition-all duration-200"
          icon={faSpotify}
        />
      );
    case "github":
      return (
        <FontAwesomeIcon
          className="text-2xl sm:text-3xl md:text-4xl hover:text-indigo hover:scale-125 transition-all duration-200"
          icon={faGithubSquare}
        />
      );
    case "notion":

    default:
      return <></>;
  }
};

export const TappableIcon: React.FC<{ icon: iconType; url: string }> = ({
  icon,
  url,
}) => {
  return (
    <div className="cursor-pointer" onClick={() => window.open(url)}>
      <Icon icon={icon} />
    </div>
  );
};
