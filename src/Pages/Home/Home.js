import React from 'react';
import Hero from './Hero/Hero';
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Contact from './Contact/Contact';
import Footer from "./Footer/Footer";

class Home extends React.Component{
    render(){
        return (
            <>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </>
        );
    }
}

export default Home;