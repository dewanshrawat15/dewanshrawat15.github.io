import { TimeHelperUtils } from "../utils/date";
import { ParsedContent } from "./ParsedContent";
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
        if (endDate) {
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
                <div className="experience-item-content">
                    <ParsedContent content={content} />
                </div>
            </div>
        </div>
    </div>
}