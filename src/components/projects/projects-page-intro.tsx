import { motion } from "motion/react";

export const ProjectsIntroductionDescription = () => {
  return (
    <div id="experience-page">
      <div className="flex px-12 py-4">
        <div className="w-full md:w-3/5 pt-7 sm:pt-20">
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
              Projects
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
            <p className="text-sm md:text-md xl:text-xl font-poppins text-gray-600 font-light mt-3 md:mt-5">
              I have built and worked on a lot of products in different arenas.
              From simple landing pages, to complex backend services, to end to
              end mobile apps and simple python downloader scripts, this page
              showcases the same.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
