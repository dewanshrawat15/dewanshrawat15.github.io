import React from "react";
import "./Experience.css";

import Card from "./Card/Card";
import data from "../../../assets/data/baseData.json";

class Experience extends React.Component{
    
    constructor(props){
        super(props);
        let expCardList = [];
        let expDataList = data["experience"]["experiences"];
        expDataList.sort(function (a, b) {
            return a.order - b.order
        }).map(item => {
            let cardElem = <Card data={item} key={item.title} />
            expCardList.push(cardElem);
            return expCardList;
        })
        
        this.state = {
            experiencesList: expCardList
        }
    }

    render(){
        return(
            <div className="experience">
                <div className="experience-laptop">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 experience-title">
                                {data["experience"]["title"]}
                            </div>
                        </div>
                        <br /><br />
                        <div className="row">
                            <div className="col-md-12 experience-content">
                                {data["experience"]["content"]}
                            </div>
                        </div>
                        <br /><br />
                        <div className="timeline">
                            {this.state.experiencesList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience
