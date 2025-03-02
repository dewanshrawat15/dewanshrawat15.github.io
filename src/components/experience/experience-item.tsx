import { motion } from "motion/react";
import { ProfessionalExperience } from "../../utils/models";
import { getExperienceDateTimeString } from "../../utils/utils";

export const ExperienceItem = ({
  experience,
}: {
  experience: ProfessionalExperience;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: 0.2,
      }}
    >
      <div className="hidden md:flex w-full justify-between md:flex-row">
        <div className="flex flex-col">
          <h3 className="font-sans font-semibold text-lg">
            {experience.company}
          </h3>
          <h5 className="font-sans text-gray-500 text-sm">
            {experience.position}
          </h5>
        </div>
        <div className="flex">
          <span className="text-gray-500 font-sans text-sm font-light">
            {getExperienceDateTimeString(experience.startDate)} -{" "}
            {getExperienceDateTimeString(experience.endDate)}
          </span>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-col">
          <h3 className="font-sans font-semibold text-lg">
            {experience.company}
          </h3>
          <h5 className="font-sans text-gray-500 text-sm">
            {experience.position}
          </h5>
          <div className="flex">
            <span className="text-gray-500 font-sans text-sm font-light">
              {getExperienceDateTimeString(experience.startDate)} -{" "}
              {getExperienceDateTimeString(experience.endDate)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
