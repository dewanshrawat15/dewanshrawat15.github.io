import { memo } from "react";
import { RESUME_URL } from "../../api/constants";
import { TextComponent } from "../TextComponent";
import "./index.css";

export interface HeroComponentProps {
    isTabletOrMobile: boolean;
}

const openResumeURL = () => {
    window.open(RESUME_URL);
}

const HeroComponentDesktop = () => {

    return <div className="hero">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img className="img-responsive hero-img" src="./image3.jpeg" height={400} width={400} />
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-10">
                            <TextComponent
                                fontSize='display_title'
                                fontWeight='700'
                                content="Dewansh Rawat"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <TextComponent
                                fontSize='h3'
                                fontWeight='300'
                                content="Software Development Engineer at Udaan.com"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-10">
                            <TextComponent
                                fontSize='content'
                                fontWeight='300'
                                content="I'm a recent grad (July 2022) and Full Stack Engineer passionate about
                                building engaging experiences across web and mobile. I leverage technologies like
                                React, Django, MERN, Flutter, Spring, TensorFlow, and PyTorch to craft intuitive
                                interfaces and robust backends. Currently, I'm immersed in creating innovative B2B
                                shopping experiences, helping buyers seamlessly navigate their journey. Excited
                                to explore and collaborate on meaningful projects – let's connect!"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-10">
                            <div className="resume-bttn" onClick={openResumeURL}>
                                <TextComponent
                                    content="Download Resume"
                                    fontWeight="500"
                                    color="#fff"
                                    fontSize='h4'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const HeroComponentMobile = () => {

    return <div className="hero">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <img className="img-responsive hero-img" src="./image3.jpeg" height={400} width={400} />
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <TextComponent
                        fontSize='h1'
                        fontWeight='700'
                        content="Dewansh Rawat"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <TextComponent
                        fontSize='h5'
                        fontWeight='300'
                        content="Software Development Engineer at Udaan.com"
                    />
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <TextComponent
                        fontSize='content'
                        fontWeight='300'
                        content="I'm a recent grad (July 2022) and Full Stack Engineer passionate about
                        building engaging experiences across web and mobile. I leverage technologies like
                        React, Django, MERN, Flutter, Spring, TensorFlow, and PyTorch to craft intuitive
                        interfaces and robust backends. Currently, I'm immersed in creating innovative B2B
                        shopping experiences, helping buyers seamlessly navigate their journey. Excited
                        to explore and collaborate on meaningful projects – let's connect!"
                    />
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-md-10">
                    <div className="resume-bttn" onClick={openResumeURL}>
                        <TextComponent
                            content="Download Resume"
                            fontWeight="500"
                            color="#fff"
                            fontSize='content'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const HeroComponentImpl = (props: HeroComponentProps) => {

    const { isTabletOrMobile } = props;
    
    if (!isTabletOrMobile) {
        return <HeroComponentDesktop />
    } else {
        return <HeroComponentMobile />
    }
}

export const HeroComponent = memo(HeroComponentImpl);