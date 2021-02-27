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

  useEffect(() => {
    if(details === null){
      firebaseServices.getDetails().then(details => {
        setDetails(details);
      })
    }
  })

  if(details == null){
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
}

export default App;
