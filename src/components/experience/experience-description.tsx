import { motion } from "motion/react";

export const ExperienceDescription = () => {
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
              Experience
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
              This page showcases my journey as a software engineer, detailing
              the skills, projects, and technologies I’ve worked with. Explore
              how my hands-on experience has helped me build innovative
              solutions and drive impactful results throughout my career.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
