import Socials from "../Socials";
import "./index.css";

export default function ContactUs(props){
    return (
        <div className="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="contact-me-title">Contact Me</h2>
                        <hr className="contact-me-title-hr" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-10">
                        <p>
                            Feel free to reach out to me on any platform!
                        </p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <Socials socials={props.data.hero[1].socials} />
                    </div>
                </div>
            </div>
        </div>
    )
}