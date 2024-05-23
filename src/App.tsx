import { AboutSection } from "./Sections/About"
import { ContactSection } from "./Sections/Contact"
import { ExperienceSection } from "./Sections/ExperienceSection"
import { Hero } from "./Sections/Hero"

export const App = () => {

    return <>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
    </>
}