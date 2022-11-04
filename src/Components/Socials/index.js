import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faFacebook, faTwitter, faSpotify, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

function Socials(props) {
    const { socials } = props;
    function triggerSocialLink(platform){
        if(socials === undefined){
            switch (platform) {
                case "mail":
                    window.open("mailto:dewanshrawat15@gmail.com")
                    break;
                case "tel":
                    window.open("tel:+91-9968858476")
                    break;
                case "github":
                    window.open("https://github.com/dewanshrawat15")
                    break;
                case "facebook":
                    window.open("https://www.facebook.com/dewanshrawat15")
                    break;
                case "medium":
                    window.open("http://medium.com/@dewanshrawat15")
                    break;
                case "spotify":
                    window.open("https://open.spotify.com/user/dewanshrawat15")
                    break;
                case "instagram":
                    window.open("https://www.instagram.com/dewanshrawat15/")
                    break;
                case "linkedin":
                    window.open("https://www.linkedin.com/in/dewanshrawat15/")
                    break;
                case "twitter":
                    window.open("https://www.twitter.com/dewanshrawat15/")
                    break;
                default:
                    break;
            }
        }
        else{
            switch (platform) {
                case "mail":
                    window.open("mailto:" + socials.mail)
                    break;
                case "tel":
                    window.open("tel:" + socials.mobileNum)
                    break;
                case "github":
                    window.open(socials.github)
                    break;
                case "facebook":
                    window.open(socials.facebook)
                    break;
                case "medium":
                    window.open(socials.medium)
                    break;
                case "spotify":
                    window.open(socials.spotify)
                    break;
                case "instagram":
                    window.open(socials.instagram)
                    break;
                case "linkedin":
                    window.open(socials.linkedin)
                    break;
                case "twitter":
                    window.open(socials.twitter)
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <ul className="list-inline">
            <li>
                <FontAwesomeIcon onClick={() => triggerSocialLink('mail')} className="socials-icon-dark" icon={faEnvelope} />
            </li>
            <li>
                <FontAwesomeIcon onClick={() => triggerSocialLink('tel')} className="socials-icon-dark" icon={faPhoneAlt} />
            </li>
            <li>
                <FontAwesomeIcon onClick={() => triggerSocialLink('github')} className="socials-icon-dark" icon={faGithub} />
            </li>
            <li>
                <FontAwesomeIcon onClick={() => triggerSocialLink('linkedin')} className="socials-icon-dark" icon={faLinkedin} />
            </li>
            <li>
                <FontAwesomeIcon onClick={() => triggerSocialLink('facebook')} className="socials-icon-dark" icon={faFacebook} />
            </li>
            <li>
                <FontAwesomeIcon onClick={() => triggerSocialLink('instagram')} className="socials-icon-dark" icon={faInstagram} />
            </li>
            <li>
                <FontAwesomeIcon onClick={() => triggerSocialLink('twitter')} className="socials-icon-dark" icon={faTwitter} />
            </li>
            <li>
                <FontAwesomeIcon onClick={() => triggerSocialLink('spotify')} className="socials-icon-dark" icon={faSpotify} />
            </li>
            <li>
                <FontAwesomeIcon onClick={() => triggerSocialLink('medium')} className="socials-icon-dark" icon={faMedium} />
            </li>
        </ul>
    );
}

export default Socials;