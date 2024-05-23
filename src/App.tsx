import { Suspense, lazy } from "react"
import { Loader } from "./Components/Loader";

const Hero = lazy(() => import("./Sections/Hero"));
const AboutSection = lazy(() => import("./Sections/About"));
const ExperienceSection = lazy(() => import("./Sections/ExperienceSection"));
const ContactSection = lazy(() => import("./Sections/Contact"));
const Footer = lazy(() => import("./Sections/Footer"));

export const App = () => {

    return <Suspense fallback={<Loader />}>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
    </Suspense>
}