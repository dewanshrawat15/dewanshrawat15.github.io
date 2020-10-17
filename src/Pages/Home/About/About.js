import React from 'react';
import './About.css';
import programmingVector from '../../../assets/images/aboutMeVector.png';

class About extends React.Component{
    render(){
        return (
            <div className="about">
                <div className="about-laptop">
                    <div className="container">
                        {/* <div className="row">
                            <div className="col-md-6 about-title">
                                About Me
                            </div>
                        </div>
                        <br /><br /> */}
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-6 about-title">
                                        About Me
                                    </div>
                                </div>
                                <br /><br />
                                <div className="row">
                                    <div className="col-md-12 about-content">
                                    I am a third year undergrad student pursuing Computer Engineering.<br />I am the Lead for Developers Student Clubs, Bharati Vidyapeeth Deemed University College of Engineering, Pune. I am also an active contributor at Google Developers Group, Pune.
                                    <br /><br />
                                    I love to innovate, ideate and build technical solutions to solve common daily life problems. Also, I speak on various topics like Open Source, Flutter, TensorFlow, Django and ReactJS.
                                    <br /><br />
                                    Wanna know more about me? Check out my CV
                                    </div>
                                </div>
                                <br /><br />
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="about-bttn">
                                            <center>
                                                <i className="fa fa-download about-bttn-fa"></i> My CV
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <img src={programmingVector} className="img-responsive" alt="Dewansh programming minimal" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-mobile">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center about-title">
                                About Me
                            </div>
                        </div>
                        <br /><br />
                        <div className="row">
                            <div className="col-md-5">
                                <img src={programmingVector} className="img-responsive" alt="Dewansh programming minimal" />
                            </div>
                            <br /><br />
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-12 about-content text-center">
                                    I am a third year undergrad student pursuing Computer Engineering.<br />I am the Lead for Developers Student Clubs, Bharati Vidyapeeth Deemed University College of Engineering, Pune. I am also an active contributor at Google Developers Group, Pune.
                                    <br /><br />
                                    I love to innovate, ideate and build technical solutions to solve common daily life problems. Also, I speak on various topics like Open Source, Flutter, TensorFlow, Django and ReactJS.
                                    <br /><br />
                                    Wanna know more about me? Check out my CV
                                    </div>
                                </div>
                                <br /><br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <center>
                                    <div className="mob-about-bttn">
                                        <i className="fa fa-download about-bttn-fa"></i> My CV
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;