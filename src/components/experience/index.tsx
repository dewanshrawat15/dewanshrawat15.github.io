import { useMemo } from "react";
import { ExperienceItem } from "./experience-item";
import { motion } from "motion/react";
import { useLandingPageStore } from "../../utils/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

export const Experience = () => {
  const { workingExperience } = useLandingPageStore();
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
            className="flex flex-row items-center justify-between"
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
            <h1 className="font-poppins font-semibold text-gray-600 text-lg md:text-2xl xl:text-5xl">
              Past Experience
            </h1>
            <Link to={"/experience"}>
              <FontAwesomeIcon
                icon={faLink}
                className="w-7 h-7 text-gray-600"
              />
            </Link>
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
