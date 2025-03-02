import { socialMediaLinks } from "./constants";
import { MediaLink } from "./media-link";

export const SocialMediaURLs = () => {
  return (
    <div className="mt-4 flex flex-row space-x-5 md:space-x-3">
      {socialMediaLinks.map((mediaLink, index) => {
        return <MediaLink key={index} mediaLink={mediaLink} />;
      })}
    </div>
  );
};
