import Hero from "./Home/Hero/Hero";
import About from "./Home/About/About";
import Projects from "./Home/Projects/Projects";
import Experience from "./Home/Experience/Experience";
import VoluntaryExperience from "./Home/Experience/VoluntaryExperience";
import Support from "./Home/Support/Support";
import Contact from "./Home/Contact/Contact";
import Footer from "./Home/Footer/Footer";

import * as firebaseServices from "./services/firestore";
import { useEffect, useState } from "react";

function App() {

  const [details, setDetails] = useState();
  const [projects, getProjects] = useState();
  // const [experience, fetchExperience] = useState();
  // const [voluntaryExperience, fetchVoluntaryExperience] = useState();

  useEffect(() => {
    if(details === undefined){
      firebaseServices.getDetails().then(details => {
        setDetails(details);
      });
    }
    firebaseServices.getProjects().then(projects => {
      getProjects(projects);
    });
  })

  // if(details == null || projects == null || experience == null){
  if(details == null || projects == null){
    return (
      <div>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <VoluntaryExperience />
        <Support />
        <Contact />
        <Footer />
      </div>
    );
  }
  else{
    return (
      <div>
        <Hero details={details} />
        <About details={details} />
        <Projects projectData={projects} />
        <Experience />
        <VoluntaryExperience />
        <Support />
        <Contact details={details} />
        <Footer />
      </div>
    );
  }
}

export default App;
