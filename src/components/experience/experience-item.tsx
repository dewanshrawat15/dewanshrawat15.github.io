import { ProfessionalExperience } from "../../utils/models";
import { getExperienceDateTimeString } from "../../utils/utils";

export const ExperienceItem = ({
  experience,
}: {
  experience: ProfessionalExperience;
}) => {
  return (
    <div className="w-full justify-between flex flex-row">
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
  );
};
