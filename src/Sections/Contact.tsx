import { useState, useEffect } from "react";
import { Icon } from "../Components/Icons";
import { contactDetails } from "../utils/constants";
import { DimensionProps } from "../utils/models";
import "./contact.css";

export default function ContactSection() {

    const [dimensions, updateDimensions] = useState<DimensionProps>({
        width: 0,
        height: 0
    });

    useEffect(() => {

        const listenToWindowSizeChangeEvents = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            updateDimensions({
                width: width,
                height: height
            });
        }

        listenToWindowSizeChangeEvents();

        window.addEventListener('resize', listenToWindowSizeChangeEvents);

        return () => window.removeEventListener('resize', listenToWindowSizeChangeEvents);

    }, []);

    if (dimensions.width <= 992) {
        return <div className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="contact-title text-center">
                            {contactDetails.title}
                        </h3>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-4">
                        <center>
                            <img className="img-responsive" src={'./contact.png'} width={250} />
                        </center>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-8">
                        <p className="contact-content">
                            {contactDetails.subtitle}
                        </p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-8 col-md-offset-1">
                        <ul className="list-inline">
                            {contactDetails.socials.map((el, idx) => {
                                return <li  key={idx}>
                                    <Icon name={el.name} url={el.url} />
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    } else {
        return <div className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="contact-wrapper">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-1">
                                    <h3 className="contact-title">
                                        {contactDetails.title}
                                    </h3>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <p className="contact-content">
                                        {contactDetails.subtitle}
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-8 col-md-offset-1">
                                    <ul className="list-inline">
                                        {contactDetails.socials.map((el) => {
                                            return <li>
                                                <Icon name={el.name} url={el.url} />
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <center>
                            <img className="img-responsive" src={'./contact.png'} width={250} />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    }
}