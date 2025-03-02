import { useMemo } from "react";
import { workingExperience } from "./constants";
import { ExperienceItem } from "./experience-item";
import { motion } from "motion/react";

export const Experience = () => {
  const experienceItems = useMemo(
    () =>
      workingExperience.sort(
        (a, b) => b.startDate.getTime() - a.startDate.getTime()
      ),
    [workingExperience]
  );

  return (
    <div id="experience">
      <div className="flex px-12 py-4">
        <div className="w-full md:w-3/5 py-5">
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
              duration: 0.5,
            }}
          >
            <h1 className="font-sans font-extralight text-gray-500 text-lg md:text-2xl xl:text-5xl">
              Past Experience
            </h1>
          </motion.div>
          <div className="flex flex-col space-y-4 mt-10">
            {experienceItems.map((experience, index) => (
              <ExperienceItem experience={experience} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
