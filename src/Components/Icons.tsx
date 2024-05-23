import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType, IconsHelper } from "../utils/icons";

export interface IconProps {
    name: IconType;
}

export const Icon = (props: IconProps) => {

    const { name } = props;

    const icon = new IconsHelper().getIcon(name);
    if (icon){
        return <FontAwesomeIcon style={{
            paddingLeft: 5,
            paddingRight: 5,
            cursor: 'pointer'
        }} fontSize={28} icon={icon} />;
    } else {
        return null;
    }

}