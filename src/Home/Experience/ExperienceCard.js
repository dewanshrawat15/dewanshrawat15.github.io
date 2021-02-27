import "./ExperienceCard.css";

function ExperienceCard(props) {
    let {title, startDate, endDate, organisation, details, theme, orgUrl} = props;
    let orgComponent;
    if(orgUrl === ""){
        if(theme === "dark"){
            orgComponent = <span className="orgUrl-dark">{organisation}</span>;
        }
        else{
            orgComponent = <span className="orgUrl-light">{organisation}</span>;
        }
    }
    else{
        if(theme === "dark"){
            orgComponent = <a className="orgUrls" target="_blank" rel="noreferrer" href={orgUrl}><span className="orgUrl-dark">{organisation}</span></a>;
        }
        else{
            orgComponent = <a className="orgUrls" target="_blank" rel="noreferrer" href={orgUrl}><span className="orgUrl-light">{organisation}</span></a>;
        }
    }
    
    if (theme === "light"){
        return (
            <div className="experience-card">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="experience-position-title">{title} - {orgComponent}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="experience-position-date">{startDate} - {endDate}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="experience-position-details">{details}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="experience-card">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="experience-position-title-dark">{title} - {orgComponent}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="experience-position-date-dark">{startDate} - {endDate}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="experience-position-details-dark">{details}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExperienceCard;