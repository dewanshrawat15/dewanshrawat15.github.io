import { ExperienceItem } from "../Components/ExperienceItem";
import "./experience.css";



export const ExperienceSection = () => {

    return <div className="experience-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h3 className="experience-title text-center">
                        Experience
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <ExperienceItem startDate={1659670200000} index={1} position="SDE 1" company="Udaan.com" content="Architected and implemented a ladder pricing system within our consumer app, enabling dynamic pricing for FMCG/Staples products. This leveraged successful bulk sale pilots and improved user experience by highlighting quantity discounts. Ensured smooth integration with existing pricing logic by managing NFRs." />
                </div>
            </div>
        </div>
    </div>
}