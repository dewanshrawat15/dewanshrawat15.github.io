import "./index.css";

export default function LoadingScreen(){
    return (
        <div className="loader">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <center>
                            <img className="img-responsive" src="sloth.png" />
                        </center>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <p>Loading in a few seconds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}