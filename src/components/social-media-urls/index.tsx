import { motion } from "motion/react";
import { MediaLink } from "./media-link";
import { useLandingPageStore } from "../../utils/store";

export const SocialMediaURLs = () => {
  const { socialMediaLinks } = useLandingPageStore();
  return (
    <motion.div
      transition={{
        duration: 3,
      }}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="mt-4 flex flex-row space-x-8 md:space-x-3"
    >
      {socialMediaLinks.map((mediaLink, index) => {
        return <MediaLink index={index} key={index} mediaLink={mediaLink} />;
      })}
    </motion.div>
  );
};
