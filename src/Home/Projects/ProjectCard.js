import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faChrome, faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard(props) {

    function openUrl(url){
        window.open(url);
    }

    return (
        <div className="col-md-4">
            <div className="project-card">
                <FontAwesomeIcon icon={faLaptopCode} className="project-card-icon" />
                <br />
                <h1 className="project-card-title">{props.projectTitle}</h1>
                <p className="project-card-text">
                    {props.projectTagline}
                </p>
                <br />
                <ul className="list-inline">
                    {props.github && <li>
                        <FontAwesomeIcon onClick={() => openUrl(props.github)} icon={faGithub} className="project-card-link-icon" />
                    </li>}
                    {props.website && <li>
                        <FontAwesomeIcon onClick={() => openUrl(props.website)} icon={faChrome} className="project-card-link-icon" />
                    </li>}
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;