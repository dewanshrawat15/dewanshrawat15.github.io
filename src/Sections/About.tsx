import { useState, useEffect } from "react";
import { ParsedContent } from "../Components/ParsedContent";
import { aboutDetails } from "../utils/constants";
import { DimensionProps } from "../utils/models";
import "./about.css";

export default function AboutSection(){

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

    const isTabletOrLower = dimensions.width <= 991;

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
                        <img src={'./image.jpeg'} className="img-responsive img-circle" height={isTabletOrLower ? 240 : 320} width={isTabletOrLower ? 240 :  320} alt="about section vector" />
                    </center>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="about-text text-center">
                        <ParsedContent content={aboutDetails.content} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}