import { motion } from "motion/react";
import { SocialMediaURLs } from "../social-media-urls";

export const Hero = () => {
  return (
    <div id="hero">
      <div className="flex px-12 py-4">
        <div className="w-full md:w-3/5 pt-12 sm:pt-32">
          <motion.div
            initial={{
              opacity: 0,
              y: 32,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <h1 className="font-poppins font-bold text-lg md:text-2xl xl:text-5xl">
              My name is Dewansh Rawat, a Software Engineer working and living
              in Delhi.
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
              delay: 0.1,
            }}
          >
            <p className="text-sm md:text-md xl:text-xl text-gray-600 font-light mt-4 md:mt-12">
              I'm a full-stack engineer specializing in crafting innovative web
              and mobile solutions using technologies like React, Typescript,
              and Python. I excel at solving complex problems, optimizing
              performance, and delivering seamless user experiences across
              diverse industries. I build impactful applications to bring
              positive change.
            </p>
          </motion.div>
          <br />
          <SocialMediaURLs />
        </div>
      </div>
    </div>
  );
};
