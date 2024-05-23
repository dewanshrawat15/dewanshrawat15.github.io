import "./about.css";

const imgUrl = "https://firebasestorage.googleapis.com/v0/b/portfolio-0011.appspot.com/o/profileImage?alt=media&token=98a323ce-c59d-4686-9ca3-a82053ff31b6";

export const AboutSection = () => {

    return <div className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <h3 className="about-title text-center">
                        About Me
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
                        I'm a passionate full-stack engineer with a proven ability to design, develop, and implement innovative web and mobile applications. I thrive in fast-paced environments and find immense satisfaction in tackling complex challenges that demand expertise in both front-end and back-end development.
                        <br /><br />
                        My skillset encompasses a wide range of technologies, allowing me to excel in both front-end (React Native, ReactJS, HTML, CSS, Javascript) and back-end development (Typescript, Kotlin, Python, Django, Flask). Beyond technical proficiency, I possess strong architectural and design skills, enabling me to conceptualize and implement intricate systems. Integration between various components is a key area of focus for me, ensuring a smooth and seamless user experience.
                        <br /><br />
                        Problem-solving and efficiency optimization are my strengths. I have a knack for identifying areas where improvements can be made, proposing effective solutions, and streamlining workflows. This translates to a demonstrably enhanced user experience and a more operationally efficient environment. I'm a strong believer in teamwork and communication, and I have a proven track record of successfully leading and mentoring teams in collaborative settings.
                        <br /><br />
                        My experience is diverse, encompassing various domains. In e-commerce, I built and revamped user experiences for different categories within a leading B2B platform. The result? Significant improvements in search latency and operational efficiency. In the media and entertainment sector, I developed a platform for extracting metadata from media content and analyzing viewership data, which ultimately provided valuable insights for a major media company. My experience even extends to the realm of blockchain, where I built a mobile wallet app for a blockchain currency and a Flutter package for interaction within the ecosystem.
                        <br /><br />
                        Beyond just technical prowess, I'm driven by a constant thirst for knowledge. I actively seek opportunities to stay abreast of the latest advancements in the tech world, continuously expanding my skillset. This dedication fuels my passion for building meaningful applications that make a positive impact.
                    </p>
                </div>
            </div>
        </div>
    </div>
}