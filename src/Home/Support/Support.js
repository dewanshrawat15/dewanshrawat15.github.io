import "./Support.css";

function Support(){
    return (
        <div className="support">
            <div className="container">
            <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h1 className="support-title">Support Me</h1>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <p className="support-text">I keep on building stuff, and host them up for free. Feel free to support me for my efforts so that I can keep on building stuff and keep them running for free.</p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <center>
                            <a className="bmc-button" rel="noreferrer" target="_blank" href="https://www.buymeacoffee.com/dewanshrawat15">
                                <img src="https://images.vexels.com/media/users/3/157209/isolated/preview/725aa2473489db2e550656210c557f18-cheesy-pizza-icon-by-vexels.png" className="img-responsive" width="24" alt="Buy me a coffee" /><span style={{marginLeft: 8}}>Buy me a pizza</span></a>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;