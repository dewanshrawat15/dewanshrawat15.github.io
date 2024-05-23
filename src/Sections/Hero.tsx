import "./hero.css";

export default function Hero(){

    return <div className="hero" id="hero">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="hero-content">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <h1 className="hero-title">
                                    Dewansh Rawat
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <h4 className="hero-subtitle">
                                    Full Stack Engineer | Architect | Dreamer
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <center>
                        <img className="img-responsive" height={320} width={320} src={'./hero.png'} />
                        {/* img here */}
                    </center>
                </div>
            </div>
        </div>
    </div>
}