import { useState, useEffect } from "react";
import { ExperienceItem } from "../Components/ExperienceItem";
import { experienceSection } from "../utils/constants";
import "./experience.css";
import { DimensionProps } from "../utils/models";

export default function ExperienceSection(){

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

        window.addEventListener('resize', listenToWindowSizeChangeEvents);

        return () => window.removeEventListener('resize', listenToWindowSizeChangeEvents);

    }, []);

    const sections = experienceSection.sections.sort((itemA, itemB) => {
        return itemB.startDate - itemA.startDate;
    });

    if (dimensions.width <= 992) {
        return <div className="experience-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="experience-title text-center">
                            {experienceSection.title}
                        </h3>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-4">
                        <center>
                            <img className="img-responsive" src={'./working.png'} width={280} />
                        </center>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-11 col-md-offset-1">
                        {sections.map((item, index) => {
                            return <ExperienceItem {...item} key={index} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    } else {
        return <div className="experience-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-1">
                                <h3 className="experience-title">
                                    {experienceSection.title}
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-11 col-md-offset-1">
                                {sections.map((item, index) => {
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
}