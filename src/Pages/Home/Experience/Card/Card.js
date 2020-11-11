import React from "react";
import "./Card.css";

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <div className="row">
                    <div className="col-md-10">
                        <h2 className="card-title">
                            {this.props.data["title"]} – <a className="org-url" href={this.props.data["org-web"]} target="_blank" rel="noopener noreferrer">
                                {this.props.data["org"]}
                            </a>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <p className="card-date">
                            <u>
                                {this.props.data["date-range"]}
                            </u>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <p className="card-content">
                            {this.props.data["content"]}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;