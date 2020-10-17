import React from "react";
import Socials from "../Socials/Socials";
import "./Contact.css";
import contactMeVector from '../../../assets/images/contactMe.png';

class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-5 contact-title">
                                        Contact Me
                                    </div>
                                </div>
                                <br /><br /><br />
                                <div className="row">
                                    <div className="col-md-10 contact-text">
                                        Feel free to reach out to me using any of your favorite platforms.
                                    </div>
                                </div>
                                <br /><br />
                                <Socials />
                            </div>
                            <div className="col-md-5">
                                <img src={contactMeVector} height="1200" width="1200" className="img-responsive" alt="Contact Me Vector" />
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Contact;