import { useState, useEffect, useContext } from "react";
import { Icon } from "../Components/Icons";
import { DimensionProps } from "../api/models";
import "./contact.css";
import { PortfolioContext } from "../api/context";

export default function ContactSection() {

    const { contactSection } = useContext(PortfolioContext);

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

    if (dimensions.width <= 991) {
        return <div className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="contact-title text-center">
                            {contactSection.title}
                        </h3>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-4">
                        <center>
                            <img className="img-responsive" src={'./contact.png'} width={250} alt="mobile contact section vector" />
                        </center>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-8">
                        <p className="contact-content text-center">
                            {contactSection.subtitle}
                        </p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-8 col-md-offset-1">
                        <center>
                            <ul className="list-inline">
                                {contactSection.socialIcons.map((el, idx) => {
                                    return <li key={idx}>
                                        <Icon name={el.name} url={el.url} />
                                    </li>
                                })}
                            </ul>
                        </center>
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
                                        {contactSection.title}
                                    </h3>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <p className="contact-content">
                                        {contactSection.subtitle}
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-8 col-md-offset-1">
                                    <ul className="list-inline">
                                        {contactSection.socialIcons.map((el, idx) => {
                                            return <li key={idx}>
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
                            <img className="img-responsive" src={'./contact.png'} width={250} alt="desktop contact section vector" />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    }
}