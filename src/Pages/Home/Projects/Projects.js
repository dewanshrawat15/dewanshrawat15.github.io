import React from "react";
import "./Projects.css";
import data from "../../../assets/data/baseData.json";

class ProjectCard extends React.Component{
    render(){
        return (
            <div className="project-card">
                <div className="col-md-4">
                    <div className="project-card-wrapper">
                        <div className="row">
                            <div className="col-md-10 project-title">
                                {this.props.data["title"]}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 project-content">
                                {this.props.data["content"]}
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-10">
                                <ul className="list-inline">
                                    <li>
                                        <a href={this.props.data["website"]} target="_blank" rel="noopener noreferrer">
                                            <i className="fa fap fa-external-link-alt"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class FeatureProjectCard extends React.Component{

    constructor(props){
        super(props);
        this.openUrl = this.openUrl.bind(this);
    }

    openUrl(){
        let url = this.props.data["website"];
        window.open(url);
    }

    render(){
        return (
            <div className="featured-project-card">
                <div className="row">
                    <div className="col-md-3">
                        <img className="img-responsive" src={this.props.data["imgUrl"]} alt={this.props.data["tagline"]} />
                    </div>
                    <div className="col-md-9">
                        <div className="featured-project-card-wrapper">
                            <div className="row">
                                <div className="col-md-8 featured-project-card-title">
                                    {this.props.data["title"]}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-11 featured-project-card-tagline">
                                    {this.props.data["tagline"]}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-11 featured-project-card-description">
                                    {this.props.data["content"]}
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-4">
                                    <span className="projectUrlBttn" onClick={this.openUrl}>
                                        Open <i className="fa fa-external-link-alt"></i>
                                    </span>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Projects extends React.Component{

    render(){
        let elems = [];
        let featuredElems = [];
        data["projects"]["projects"]["others"].map(item => {
            let key = item["order"];
            let newElem = <ProjectCard data={item} key={key} />;
            elems.push(newElem);
            return elems;
        });
        data["projects"]["projects"]["featured"].map(item => {
            let key = item["order"];
            let newElem = <FeatureProjectCard data={item} key={key} />;
            featuredElems.push(newElem);
            return featuredElems;
        });
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 projects-container-title">
                            {data["projects"]["title"]}
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-10 projects-container-text">
                            {data["projects"]["content"]}
                        </div>
                    </div>
                    <br /><br /><br />
                    <div className="row">
                        <div className="col-md-5 projects-container-subtitle">
                            Featured Projects
                        </div>
                    </div>
                    <br /><br />
                    {featuredElems}
                    <br /><br />
                    <div className="row">
                        <div className="col-md-5 projects-container-subtitle">
                            Projects
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        {elems}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;