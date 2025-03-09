import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ProjectsIntroductionDescription } from "../../components/projects/projects-page-intro";
import { ProjectShowcase } from "../../components/projects/projects-page-showcase";
import { useFirebaseData } from "../../utils/hooks";

export default function ProjectsPage() {
  useFirebaseData();
  return (
    <>
      <Header />
      <ProjectsIntroductionDescription />
      <ProjectShowcase />
      <Footer />
    </>
  );
}
