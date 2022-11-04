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
                                I am a third year undergrad student pursuing Computer Engineering. I am an SDE Intern at Sony Research India. I am also an active contributor at Google Developers Group, Pune and the former Lead at Google Developers Student Clubs, Bharati Vidyapeeth Deemed University College of Engineering, Pune. I love to innovate, ideate and build technical solutions to solve common daily life problems. Also, I speak on various topics like Open Source, Flutter, TensorFlow, Django and ReactJS. Wanna know more about me? Check out my CV.
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
                                I am a third year undergrad student pursuing Computer Engineering. I am an SDE Intern at Sony Research India. I am also an active contributor at Google Developers Group, Pune and the former Lead at Google Developers Student Clubs, Bharati Vidyapeeth Deemed University College of Engineering, Pune. I love to innovate, ideate and build technical solutions to solve common daily life problems. Also, I speak on various topics like Open Source, Flutter, TensorFlow, Django and ReactJS. Wanna know more about me? Check out my CV.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}