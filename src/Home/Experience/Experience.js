import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

function Experience(){
    let experienceRows = [];
    let details = [
        {
            title: "Full Stack Intern",
            startDate: "5th October 2020",
            endDate: "5th February 2021",
            organisation: "Tezsure",
            details: "My work involves developing the mobile wallet app on React Native for the blockchain currency Tez and building a Flutter based package to be able to interact with the Tezos Ecosystem.",
            orgUrl: "https://tezsure.com/"
        },
        {
            title: "Summer Research Intern",
            startDate: "10th June 2020",
            endDate: "18th August 2020",
            organisation: "Indian Institute of Information Technology Allahabad",
            details: "I was an intern for a duration of two months where I worked on getting state of the art results for classifying Autism on the ABIDE dataset. My worked revolved around Dimensionality Reduction using which I was able to get 80% classification accuracy, as compared to other state of the art results.",
            orgUrl: ""
        },
        {
            title: "Summer Intern",
            startDate: "11th June 2019",
            endDate: "28th July 2019",
            organisation: "Indian Institute of Technology Delhi",
            details: "I was an intern for a period of two months. I worked on a project to create a system to track files in real time using barcodes and barcode scanners. We made a central web app based on Java and Struts. It was deployed on a VM instance on IIT Delhi’s ingenious cloud platform making it accessible locally, within the IIT network. Also, IIT Delhi’s OAuth system was added to increase the security of the app and make it accessible to everyone within the IIT network.",
            orgUrl: ""
        }
    ];
    details.forEach(element => {
        let newExperienceCard = <ExperienceCard key={element.title} {...element} theme="light" />;
        experienceRows.push(newExperienceCard);
    });
    return (
        <div className="experience">
            <div className="container">
            <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h1 className="experience-title">Experience</h1>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <p className="experience-text">I am a great team player. From a Website designer writing code in HTML, to being a mobile app developer designing Flutter apps, to writing robust backend structure's in Django, I have been responsible for handling work in a lot of different teams. From being a team player to bring a team leader, I have worked on a lot.</p>
                    </div>
                </div>
                <br /><br />
                {experienceRows}
            </div>
        </div>
    );
}

export default Experience;