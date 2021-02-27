import "./Projects.css";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";

function FeaturedProjectRow(props){
    let {projects} = props;
    return (
        <>
            <div className="row">
                {projects}
            </div>
            <br /><br />
        </>
    );
}

function Projects() {

    let featuredProjects = [
        {
            projectTitle: "Thoughts",
            projectTagline: "Pen down your daily thoughts in a more accessible way!",
            projectDetails: "Thoughts aim to provide you a platform to write down about your day. Write down your thoughts and write about your experiences.",
            projectThumbnail: "https://th-oughts.web.app/logo512.png"
        },
        {
            projectTitle: "Cuisinier",
            projectTagline: "Pen down your daily thoughts in a more accessible way!",
            projectDetails: "Cuisinier is a smart platform where the app suggests the most optimum usage of the ingredients being used to prepare a particular dish.",
            projectThumbnail: "https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/bfedfa89e30645b68a7145c312d3da12/projects/bbe11fb2ea0b4a11ba4411e598c5a73f/picod3g0urtl.png"
        }
    ];
    let projectRowsList = [];
    let projectRow = [];

    for (let index = 0; index < featuredProjects.length; index++) {
        let projectDetails = featuredProjects[index];
        let featuredProjectCard = <FeaturedProjectCard key={projectDetails.projectTitle} {...projectDetails} />;
        projectRow.push(featuredProjectCard);
        if (index % 2 === 1){
            let newProjectRow = <FeaturedProjectRow key={(index / 2) - 1} projects={projectRow} />;
            projectRow = [];
            projectRowsList.push(newProjectRow);
        }
    }
    if(projectRow.length !== 0){
        let newProjectRow = <FeaturedProjectRow key={featuredProjects.length - 1} projects={projectRow} />;
        projectRow = [];
        projectRowsList.push(newProjectRow);
    }
    let projects = [
        {
            projectTitle: "Historia",
            projectTagline: "A ReactJS based chrome extension to keep track of Visual Browser History.",
            github: "https://github.com/historia-inout",
            website: ""
        },
        {
            projectTitle: "NPTEL Downloader",
            projectTagline: "Download NPTEL course page videos using the NPTEL Downloader Script",
            github: "https://github.com/dewanshrawat15/NPTEL-downloader",
            website: ""
        },
        {
            projectTitle: "Thoughts",
            projectTagline: "Pen down your daily thoughts in a more accessible, easy and friendly way!",
            github: "https://github.com/dewanshrawat15/thoughts",
            website: "https://th-oughts.web.app/"
        }
    ];
    let otherProjectRowsList = [];
    for (let index = 0; index < projects.length; index++) {
        const element = projects[index];
        let newProjectCard = <ProjectCard key={index} {...element} />;
        otherProjectRowsList.push(newProjectCard);
    }

    return (
        <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h1 className="projects-title">Projects</h1>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <p className="projects-text">Welcome to the tinker lab. I keep on building stuff, trying to solve any modern day life problem I feel can be solved using code. These are a few featured projects, while the others have been notably mentioned!</p>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <h3 className="projects-subtitle">Featured Projects</h3>
                    </div>
                </div>
                <br /><br />
                {projectRowsList}
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <h3 className="projects-subtitle">Other Projects</h3>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    {otherProjectRowsList}
                </div>
            </div>
        </div>
    );
}

export default Projects;