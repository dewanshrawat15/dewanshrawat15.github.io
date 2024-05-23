import { ExperienceItem } from "../Components/ExperienceItem";
import { experienceSectionConsts } from "../utils/constants";
import "./experience.css";

export default function ExperienceSection(){

    return <div className="experience-section">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-1">
                            <h3 className="experience-title">
                                Experience
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-11 col-md-offset-1">
                            {experienceSectionConsts.map((item, index) => {
                                return <ExperienceItem {...item} key={index} />
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <center>
                        <img className="img-responsive" src={'./working.png'} width={280} />
                    </center>
                </div>
            </div>
        </div>
    </div>
}