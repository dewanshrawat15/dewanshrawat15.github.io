import { motion } from "motion/react";
import { SocialMediaURLs } from "../social-media-urls";

export const ContactSection = () => {
  return (
    <div id="contact-section">
      <div className="flex px-12 py-4">
        <div className="w-full md:w-3/5 py-5">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.2,
            }}
          >
            <h1 className="font-poppins font-bold text-xl md:text-2xl xl:text-5xl">
              Let's get to know each other.
            </h1>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.2,
            }}
          >
            <h2 className="font-poppins font-bold text-gray-600 text-xl md:text-2xl xl:text-5xl">
              Get in touch.
            </h2>
          </motion.div>
          <br />
          <SocialMediaURLs />
        </div>
      </div>
    </div>
  );
};
