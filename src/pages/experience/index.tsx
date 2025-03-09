import { useMemo } from "react";
import { ExperienceDescription } from "../../components/experience/experience-description";
import { useFirebaseData } from "../../utils/hooks";
import { ExperienceItem } from "../../components/experience/experience-item";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export default function ExperiencePage() {
  const { workingExperience } = useFirebaseData();
  const experienceItems = useMemo(
    () =>
      workingExperience.sort(
        (a, b) => b.startDate.getTime() - a.startDate.getTime()
      ),
    [workingExperience]
  );
  return (
    <>
      <Header />
      <ExperienceDescription />
      <div className="px-12 pt-4 pb-12 flex flex-col space-y-4 mt-5 md:mt-7 lg:mt-10">
        {experienceItems.map((experience, index) => (
          <ExperienceItem
            showDescription={true}
            experience={experience}
            key={index}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
