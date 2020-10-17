import React from "react";
import "./Footer.css";

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 footer-text text-center">
                            <p>Made with <span className="heart-icon">&hearts;</span> by Dewansh Rawat &copy;</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;