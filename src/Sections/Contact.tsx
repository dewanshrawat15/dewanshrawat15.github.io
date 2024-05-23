import { Icon } from "../Components/Icons";
import { IconType } from "../utils/icons";
import "./contact.css";

export const ContactSection = () => {

    const socialLinks: IconType[] = ['github', 'linkedin', 'email'];

    return <div className="contact-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h3 className="contact-title text-center">
                        Contact Me
                    </h3>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <p className="text-center contact-content">
                        Let's chat! I'm always interested in connecting with fellow developers and tackling new challenges. Feel free to reach out via any of your preferred mode of communication
                    </p>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <center>
                        <ul className="list-inline">
                            {socialLinks.map((el) => {
                                return <li>
                                    <Icon name={el} />
                                </li>
                            })}
                        </ul>
                    </center>
                </div>
            </div>
        </div>
    </div>
}