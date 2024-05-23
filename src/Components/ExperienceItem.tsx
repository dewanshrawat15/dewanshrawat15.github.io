import { TimeHelperUtils } from "../utils/date";
import "./experience_item.css";

export interface ExperienceItemProps {
    position: string;
    company: string;
    index: number;
    content: string;
    startDate: number;
    endDate?: number;
}

export const ExperienceItem = (props: ExperienceItemProps) => {

    const { position, company, content, startDate, endDate } = props;

    const buildStartAndEndDates = (): string => {
        const startDateStr = new TimeHelperUtils().buildDateForExperienceSection(startDate);
        if (endDate === null) {
            const endDateStr = new TimeHelperUtils().buildDateForExperienceSection(endDate);
            return `${startDateStr} - ${endDateStr}`;
        }
        return `${startDateStr} - Present`;
    }

    return <div className="experience-item">
        <div className="row">
            <div className="col-md-10">
                <h5 className="experience-item-title">
                    <span className="experience-item-pos">{position}</span> - {company} <span className="experience-item-timeline">{buildStartAndEndDates()}</span>
                </h5>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <p className="experience-item-content">
                    {content}
                </p>
            </div>
        </div>
    </div>
}