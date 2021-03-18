import "./VoluntaryExperience.css";
import ExperienceCard from "./ExperienceCard";

function VoluntaryExperience(props){
    let {experienceDetails} = props;
    if(experienceDetails == null){
        let experienceRows = [];
        let details = [
            {
                title: "Lead",
                startDate: "12th August 2020",
                endDate: "Currently",
                organisation: "Developer Student Clubs Bharati Vidyapeeth Deemed University College of Engineering Pune",
                details: "I lead a community of more than 300+ students. We conduct events on the topics: Web Development, Mobile App Development, Machine Learning and Google Cloud primarily. We also build solutions for modern daily life problems.",
                orgUrl: ""
            },
            {
                title: "Web Developer",
                startDate: "24th July 2019",
                endDate: "June 2020",
                organisation: "Google Developers Group Pune",
                details: "Google Developers Group Pune is an initiative to concentrate the efforts of many developers in and around Pune to learn, share and get productive using the various Google products. I was incharge of maintaining the website and attracting views via ticketing.",
                orgUrl: ""
            },
            {
                title: "Core Team Member",
                startDate: "February 2019",
                endDate: "July 2020",
                orgUrl: "",
                organisation: "Developer Student Clubs Bharati Vidyapeeth Deemed University College of Engineering Pune",
                details: "Developer Student Clubs Bharati Vidyapeeth Deemed University College of Engineering Pune is a Google Developers program for university students to learn skills in the domains of mobile development, web development, machine learning, and cloud (primarily). We also help encourage different other domains like competetive programming, ethical hacking, AR/VR, etc. The club is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills. The club is intended as a space for students to try out new ideas and collaborate to solve mobile and web development problems."
            },
            {
                title: "Developer",
                startDate: "August 2018",
                orgUrl: "",
                endDate: "October 2018",
                organisation: "Entrepreneurship Development Cell, Bharati Vidyapeeth Deemed University College of Engineering Pune",
                details: "Entrepreneurship Development Cell, is basically for the students and by the students. I was one of 6 students selected over 250 students for the role of a website designer. My primary role was to design website for upcoming events. I also worked on automating processes like sending personalised emails over SMTP."
            },
            {
                title: "Web Designer",
                startDate: "April 2016",
                endDate: "April 2018",
                organisation: "Converge Clan",
                orgUrl: "http://converge-clan.com",
                details: "Converge Clan is the computer club of Montfort School, Ashok Vihar. It is a group of talented and curious technology enthusiasts who are specialised in different fields of technology, namely quizzing, programming, web development, digital imaging, 3D Modeling, video editting and group discussion. My primary role involved designing and maintaining it's websites."
            }
        ];
        details.forEach(element => {
            let newExperienceCard = <ExperienceCard key={element.title} {...element} theme="dark" />;
            experienceRows.push(newExperienceCard);
        });
        return (
            <div className="voluntary-experience">
                <div className="container">
                <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <h1 className="voluntary-experience-title-dark">Voluntary Experience</h1>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-center">
                            <p className="voluntary-experience-text-dark">In my free available time, I volunteer with different communities to help organise different events with communities. From designing websites to planning events to organising events, I volunteer with a lot of communities.</p>
                        </div>
                    </div>
                    <br /><br />
                    {experienceRows}
                </div>
            </div>
        );
    }
    else{
        let experienceRows = [];
        experienceDetails.forEach(element => {
            let newExperienceCard = <ExperienceCard key={element.title} {...element} theme="dark" />;
            experienceRows.push(newExperienceCard);
        });
        return (
            <div className="voluntary-experience">
                <div className="container">
                <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <h1 className="voluntary-experience-title-dark">Voluntary Experience</h1>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 text-center">
                            <p className="voluntary-experience-text-dark">In my free available time, I volunteer with different communities to help organise different events with communities. From designing websites to planning events to organising events, I volunteer with a lot of communities.</p>
                        </div>
                    </div>
                    <br /><br />
                    {experienceRows}
                </div>
            </div>
        );
    }
}

export default VoluntaryExperience;