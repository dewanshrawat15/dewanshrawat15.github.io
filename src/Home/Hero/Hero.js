// import profImg from "../../Data/dewanshrawat15.jpg";
import "./Hero.css";
import Socials from "../../Data/Socials";

function Hero (props) {
    let details = props.details;
    if(details == null){
        return (
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <center>
                                <img width="400" className="img-responsive img-circle img-laptop" src="https://dewanshrawat.in/static/media/me.cd4b172b.jpg" alt="Dewansh Rawat" />
                                <img width="300" className="img-responsive img-circle img-mobile" src="https://dewanshrawat.in/static/media/me.cd4b172b.jpg" alt="Dewansh Rawat" />
                            </center>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h1 className="hero-title">Dewansh Rawat</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <p className="hero-position">Lead at Developer Student Clubs</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <p className="hero-position-location">Bharati Vidyapeeth Deemed University College of Engineering Pune</p>
                        </div>
                    </div>
                    <br />
                    <Socials />
                </div>
            </div>
        );
    }
    else{
        let name = details.name;
        let position = details.position;
        let institute = details.institute;
        return (
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <center>
                                <img width="400" className="img-responsive img-circle img-laptop" src="https://dewanshrawat.in/static/media/me.cd4b172b.jpg" alt="Dewansh Rawat" />
                                <img width="300" className="img-responsive img-circle img-mobile" src="https://dewanshrawat.in/static/media/me.cd4b172b.jpg" alt="Dewansh Rawat" />
                            </center>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <h1 className="hero-title">{name}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <p className="hero-position">{position}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <p className="hero-position-location">{institute}</p>
                        </div>
                    </div>
                    <br />
                    <Socials />
                </div>
            </div>
        );
    }
}

export default Hero;