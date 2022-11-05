import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Socials from "../Socials";
import "./index.css";

export default function Hero(props){

    const { dimensions, data } = props;

    const handleOpenResume = () => {
        window.open("https://firebasestorage.googleapis.com/v0/b/portfolio-0011.appspot.com/o/CV%20-%20Post%20Pharma%20Bolt.pdf?alt=media");
    }

    const handleInstituteWebsiteOpen = () => {
        window.open(data.hero[1].instituteWebsite);
    }

    if(dimensions.width < 992){
        return (
            <div className="hero">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <center>
                                <img alt="Dewansh" className="img-responsive img-circle" height="200" width="200" src="https://firebasestorage.googleapis.com/v0/b/portfolio-0011.appspot.com/o/profileImage?alt=media&token=98a323ce-c59d-4686-9ca3-a82053ff31b6" />
                            </center>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2>{data.hero[1].name ? data.hero[1].name : "Dewansh Rawat"}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <p onClick={handleInstituteWebsiteOpen} className="hero-title">{data.hero[1].position ? data.hero[1].position : "Engineer"} at {data.hero[1].institute ? data.hero[1].institute : "Udaan"}</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-12">
                                    <center>
                                        <span onClick={handleOpenResume} className="resume-bttn">
                                            <FontAwesomeIcon icon={faFile} /> &nbsp; View Resume
                                        </span>
                                    </center>
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-12">
                                    <center>
                                        <Socials socials={data.hero[1].socials} />
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <center>
                                <img alt="Dewansh" className="img-responsive img-circle" height="200" width="200" src="https://firebasestorage.googleapis.com/v0/b/portfolio-0011.appspot.com/o/profileImage?alt=media&token=98a323ce-c59d-4686-9ca3-a82053ff31b6" />
                            </center>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 style={{
                                        marginTop: 10
                                    }}>Dewansh Rawat</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p onClick={handleInstituteWebsiteOpen} className="hero-title">{data.hero[1].position ? data.hero[1].position : "Engineer"} at {data.hero[1].institute ? data.hero[1].institute : "Udaan"}</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-12">
                                    <span onClick={handleOpenResume} className="resume-bttn">
                                        <FontAwesomeIcon icon={faFile} /> &nbsp; View Resume
                                    </span>
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-12">
                                    <Socials socials={data.hero[1].socials} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}