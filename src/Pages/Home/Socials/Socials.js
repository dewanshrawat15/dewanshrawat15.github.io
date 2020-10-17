import React from "react";
import "./Socials.css";

class Socials extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-10 hero-socials">
                    <div className="social-links">
                        <ul className="list-inline">
                            <li>
                                <a href="mailto:dewanshrawat15@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa faw fa-envelope"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/dewanshrawat15" target="_blank" rel="noopener noreferrer">
                                    <i className="fab faw fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/dewanshrawat15" target="_blank" rel="noopener noreferrer">
                                    <i className="fab faw fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagr.am/dewanshrawat15" target="_blank" rel="noopener noreferrer">
                                    <i className="fab faw fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/dewanshrawat15" target="_blank" rel="noopener noreferrer">
                                    <i className="fab faw fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/dewanshrawat15" target="_blank" rel="noopener noreferrer">
                                    <i className="fab faw fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Socials;