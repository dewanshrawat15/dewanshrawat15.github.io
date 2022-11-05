import "./index.css";

export default function About(props){
    const { dimensions } = props;
    if(dimensions.width >= 992){
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="about-me-title">About Me</h2>
                            <hr className="about-me-title-hr" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-10">
                            <p>
                                I am a fresh 2022 graduate, working as an Engineer in the Core Buying Experience team at Udaan.com
                                <br /><br />
                                I love to keep building and shaping unconventional ideas into products for scale. I have a keen eye on UX, and on building systems that scale, are resilient and handle concurrency at peak.
                                <br /><br />
                                At Udaan, I have been working on building a new revamped experience for Pharma users based out of Bangalore. I worked on creating a new refurbished experience for Pharma users to maximise Add to Cart conversions. I was solely responsible for building the experience from grounds up, resulting in decrease in time to build cart, increase in weekly GMV and orders placed and other key metric factors within 30 buyers from Bangalore. Scaling it up to 200 buyers in 3 different cities in the coming days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="about-me-title text-center">About Me</h2>
                            <center><hr className="about-me-title-hr" /></center>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-10 text-center">
                            <p>
                                I am a fresh 2022 graduate, working as an Engineer in the Core Buying Experience team at Udaan.com
                                <br /><br />
                                I love to keep building and shaping unconventional ideas into products for scale. I have a keen eye on UX, and on building systems that scale, are resilient and handle concurrency at peak.
                                <br /><br />
                                At Udaan, I have been working on building a new revamped experience for Pharma users based out of Bangalore. I worked on creating a new refurbished experience for Pharma users to maximise Add to Cart conversions. I was solely responsible for building the experience from grounds up, resulting in decrease in time to build cart, increase in weekly GMV and orders placed and other key metric factors within 30 buyers from Bangalore. Scaling it up to 200 buyers in 3 different cities in the coming days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}