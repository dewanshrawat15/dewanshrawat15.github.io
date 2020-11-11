import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from "./Experience/Experience";
import Contact from './Contact/Contact';
import Footer from "./Footer/Footer";

class Home extends React.Component{
    render(){
        return (
            <>
                <Hero />
                <About />
                <Experience />
                <Contact />
                <Footer />
            </>
        );
    }
}

export default Home;