import { useContext, useEffect, useState } from "react";
import "./hero.css";
import { DimensionProps } from "../api/models";
import { PortfolioContext } from "../api/context";

export default function Hero(){

    const [dimensions, updateDimensions] = useState<DimensionProps>({
        width: 0,
        height: 0
    });
    const { heroSection } = useContext(PortfolioContext);

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

        listenToWindowSizeChangeEvents();

        return () => window.removeEventListener('resize', listenToWindowSizeChangeEvents);

    }, []);

    const downloadResume = () => {
        window.open(heroSection.resumeUrl);
    }

    if (dimensions.width <= 991) {
        return <div className="hero" id="hero">
            <div className="container">
                <div className="col-md-4">
                    <center>
                        <img className="img-responsive" height={320} width={320} src={'./hero.png'} alt="mobile hero section vector" />
                    </center>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="hero-title text-center">
                            {heroSection.name}
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <h4 className="hero-subtitle text-center">
                                {heroSection.subtitle}
                            </h4>
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-8">
                            <center>
                                <span style={{
                                    background: '#15171c',
                                    fontWeight: 600,
                                    paddingLeft: 24,
                                    paddingRight: 24,
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    cursor: 'pointer',
                                    borderRadius: 5,
                                    color: '#fff'
                                }} onClick={downloadResume}>
                                    My Resume
                                </span>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    } else {
        return <div className="hero" id="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="hero-content">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <h1 className="hero-title">
                                        {heroSection.name}
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <h4 className="hero-subtitle">
                                        {heroSection.subtitle}
                                    </h4>
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-8 col-md-offset-1">
                                    <span style={{
                                        background: '#15171c',
                                        fontWeight: 600,
                                        paddingLeft: 24,
                                        paddingRight: 24,
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        cursor: 'pointer',
                                        borderRadius: 5,
                                        color: '#fff'
                                    }} onClick={downloadResume}>
                                        My Resume
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <center>
                            <img className="img-responsive" height={320} width={320} src={'./hero.png'} alt="desktop hero section vector" />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    }
}