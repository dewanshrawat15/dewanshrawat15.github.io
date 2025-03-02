import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import { URLType } from "../../utils/models";

export const MediaLink = ({
  mediaLink,
}: {
  mediaLink: { url: string; type: URLType };
}) => {
  const mediaIcon = useMemo(() => {
    switch (mediaLink.type) {
      case "facebook":
        return faFacebook;
      case "github":
        return faGithub;
      case "instagram":
        return faInstagram;
      case "linkedin":
        return faLinkedin;
      case "mail":
        return faEnvelope;
      case "spotify":
        return faSpotify;
      default:
        return null;
    }
  }, [mediaLink.type]);

  return (
    <div className="duration-200 hover:scale-110 scale-100">
      <a
        href={mediaLink.url}
        target="_blank"
        className="text-black underline cursor-pointer font-medium"
      >
        <span className="hidden md:block">{mediaLink.type}</span>
        {mediaIcon !== null ? (
          <FontAwesomeIcon
            icon={mediaIcon}
            className="block w-6 h-6 md:hidden"
          />
        ) : (
          <></>
        )}
      </a>
    </div>
  );
};
