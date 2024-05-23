import { Icon } from "../Components/Icons";
import { IconType } from "../utils/icons";
import "./contact.css";

export const ContactSection = () => {

    const socialLinks: IconType[] = ['github', 'linkedin', 'email'];

    return <div className="contact-section">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="contact-wrapper">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-1">
                                <h3 className="contact-title">
                                    Contact Me
                                </h3>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <p className="contact-content">
                                    Let's chat! I'm always interested in connecting with fellow developers and tackling new challenges. Feel free to reach out via any of your preferred mode of communication
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-8 col-md-offset-1">
                                <ul className="list-inline">
                                    {socialLinks.map((el) => {
                                        return <li>
                                            <Icon name={el} />
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