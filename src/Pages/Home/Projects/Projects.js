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
                                        <a href="mailto:dewanshrawat15@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fap fa-github"></i>
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

class Projects extends React.Component{

    render(){
        let elems = [];
        data["projects"]["projects"]["others"].map(item => {
            let key = item["order"];
            let newElem = <ProjectCard data={item} key={key} />;
            elems.push(newElem);
            return elems;
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