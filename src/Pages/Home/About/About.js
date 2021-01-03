import React, { Component } from "react";
import "./About.css";

import cv from "../../../assets/data/cv.pdf"

class About extends Component{

    render(){
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-title">
                                About Me
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-10">
                            <div className="about-text">
                                I am a third year undergrad student pursuing Computer Engineering. I am the Lead for Developers Student Clubs, Bharati Vidyapeeth Deemed University College of Engineering, Pune. I am also an active contributor at Google Developers Group, Pune.
                                <br /><br />
                                I love to innovate, ideate and build technical solutions to solve common daily life problems. Also, I speak on various topics like Open Source, Flutter, TensorFlow, Django and ReactJS.
                                <br /><br />
                                Wanna know more about me? Check out my CV
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                    <div className="row">
                        <div className="col-md-4">
                            <a href={cv} rel="noopener noreferrer" target="_blank">
                                <span className="cv-bttn">
                                    <i className="fa fa-download" style={{ paddingRight: '6px' }} /> My CV
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default About;