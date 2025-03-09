import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { ProjectsIntroductionDescription } from "../../components/projects/projects-page-intro";
import { ProjectShowcase } from "../../components/projects/projects-page-showcase";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsIntroductionDescription />
      <ProjectShowcase />
      <Footer />
    </>
  );
}
