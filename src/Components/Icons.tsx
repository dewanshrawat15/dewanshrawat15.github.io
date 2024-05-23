import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconsHelper } from "../utils/icons";
import { IconProps } from "../utils/constants";

export const Icon = (props: IconProps) => {

    const { name, url } = props;

    const icon = new IconsHelper().getIcon(name);
    if (icon){
        return <FontAwesomeIcon style={{
            paddingLeft: 5,
            paddingRight: 5,
            cursor: 'pointer'
        }} onClick={() => {
            window.open(url);
        }} fontSize={28} icon={icon} />;
    } else {
        return null;
    }

}