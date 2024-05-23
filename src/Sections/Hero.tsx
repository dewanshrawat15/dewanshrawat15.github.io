import "./hero.css";

export const Hero = () => {

    return <div className="hero" id="hero">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h1 className="text-center hero-title">
                        Dewansh Rawat
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <hr className="hero-line" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <h4 className="text-center hero-subtitle">
                        Full Stack Engineer | Architect | Dreamer
                    </h4>
                </div>
            </div>
        </div>
    </div>
}