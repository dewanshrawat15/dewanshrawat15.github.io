import { Hero } from "../../components/hero";
import { Footer } from "../../components/footer";
import { Experience } from "../../components/experience";
import { ContactSection } from "../../components/contact";
import { useFirebaseData } from "../../utils/hooks";

export const LandingPage = () => {
  useFirebaseData();
  return (
    <>
      <Hero />
      <Experience />
      <ContactSection />
      <Footer />
    </>
  );
};
