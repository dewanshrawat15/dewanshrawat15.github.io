import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Contact from './Contact/Contact';

class Home extends React.Component{
    render(){
        return (
            <>
                <Hero />
                <About />
                <Contact />
            </>
        );
    }
}

export default Home;