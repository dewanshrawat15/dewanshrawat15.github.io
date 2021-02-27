import "./FeaturedProjectCard.css";

function FeaturedProjectCard(props){
    let {projectTitle, projectTagline, projectDetails, projectThumbnail} = props;
    let imgAltText = projectTitle + " thumbnail";
    return (
        <div className="featured-project-card-holder">
            <div className="laptop">
                <div className="featured-project-card">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-responsive" alt={imgAltText} src={projectThumbnail} />
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h1 className="featured-project-title">{projectTitle}</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="featured-project-tagline">{projectTagline}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="featured-project-text">{projectDetails}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile">
                <div className="featured-project-card">
                    <div className="col-md-8">
                        <center>
                            <img className="img-responsive" alt={imgAltText} src={projectThumbnail} />
                        </center>
                    </div>
                    <br /><br />
                    <div className="col-md-8">
                        <h1 className="featured-project-title">{projectTitle}</h1>
                    </div>
                    <div className="col-md-12">
                        <p className="featured-project-tagline">{projectTagline}</p>
                    </div>
                    <br />
                    <div className="col-md-12">
                        <p className="featured-project-text">{projectDetails}</p>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    );
}

export default FeaturedProjectCard;