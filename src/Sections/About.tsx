import { ParsedContent } from "../Components/ParsedContent";
import { aboutDetails } from "../utils/constants";
import "./about.css";

export default function AboutSection(){

    return <div className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <h3 className="about-title text-center">
                        {aboutDetails.title}
                    </h3>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <center>
                        <img src={'./image.jpeg'} className="img-responsive img-circle" height={320} width={320} />
                    </center>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <p className="about-text text-center">
                        <ParsedContent content={aboutDetails.content} />
                    </p>
                </div>
            </div>
        </div>
    </div>
}