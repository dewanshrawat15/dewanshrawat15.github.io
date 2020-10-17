import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from "./Footer/Footer";

class Home extends React.Component{
    render(){
        return (
            <>
                <Hero />
                <About />
                <Contact />
                <Footer />
            </>
        );
    }
}

export default Home;