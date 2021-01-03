import React from 'react';
import './Hero.css';
import Socials from "../Socials/Socials";
import profImage from '../../../assets/images/me.jpg';

class Hero extends React.Component{

    render(){
        return(
            <div className="hero">
                <div className="hero-laptop">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="hero-text-wrapper">
                                    <div className="row">
                                        <div className="col-md-8 hero-title">
                                            Hi
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 hero-title">
                                            I am <span className="name">Dewansh</span>.
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-10 hero-tagline">
                                            Lead at Developer Student Clubs, Bharati Vidyapeeth Deemed University College of Engineering Pune
                                            {/* Destroying barriers, imagining the unimaginable and venturing out where others fail. */}
                                        </div>
                                    </div>
                                    <br /><br />
                                    <Socials />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={profImage} className="img-responsive img-circle" alt="Dewansh Rawat" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-mobile">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <center>
                                    <img src={profImage} className="img-responsive img-circle" width="300" alt="Dewansh Rawat" />
                                </center>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="hero-text-wrapper">
                                    <div className="row">
                                        <div className="col-md-8 hero-title text-center">
                                            Hi
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 hero-title text-center">
                                            I am Dewansh.
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-6 hero-tagline text-center">
                                            Lead at Developer Student Clubs, Bharati Vidyapeeth Deemed University College of Engineering Pune
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="row">
                                        <div className="col-md-10 hero-socials">
                                            <div className="social-links text-center">
                                                <ul className="list-inline">
                                                    <li>
                                                        <a href="mailto:dewanshrawat15@gmail.com" target="_blank" rel="noopener noreferrer">
                                                            <i className="fa faw fa-envelope"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://github.com/dewanshrawat15" target="_blank" rel="noopener noreferrer">
                                                            <i className="fab faw fa-github"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.facebook.com/the.funky.designer" target="_blank" rel="noopener noreferrer">
                                                            <i className="fab faw fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagr.am/dewanshrawat15" target="_blank" rel="noopener noreferrer">
                                                            <i className="fab faw fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.linkedin.com/dewanshrawat15" target="_blank" rel="noopener noreferrer">
                                                            <i className="fab faw fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/dewanshrawat15" target="_blank" rel="noopener noreferrer">
                                                            <i className="fab faw fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Hero