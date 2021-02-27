import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function About() {

    function downloadCV() {
        window.open("https://dewanshrawat.in/static/media/cv.74e00b8d.pdf");
    }

    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h1 className="about-title">
                            About Me
                        </h1>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <p className="about-text">
                            I am a third year undergrad student pursuing Computer Engineering. I am the Lead for Developers Student Clubs, Bharati Vidyapeeth Deemed University College of Engineering, Pune. I am also an active contributor at Google Developers Group, Pune.
                            <br /><br />
                            I love to innovate, ideate and build technical solutions to solve common daily life problems. Also, I speak on various topics like Open Source, Flutter, TensorFlow, Django and ReactJS.
                            <br /><br />
                            Wanna know more about me? Check out my CV.
                        </p>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <center>
                            <span className="download-cv-bttn" onClick={downloadCV}>
                                <FontAwesomeIcon icon={faDownload} /> My CV
                            </span>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;