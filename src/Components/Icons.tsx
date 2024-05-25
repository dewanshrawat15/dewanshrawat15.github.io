import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconsHelper } from "../utils/icons";
import { IconProps } from "../utils/constants";
import { useState, useEffect } from "react";
import { DimensionProps } from "../api/models";

export const Icon = (props: IconProps) => {

    const { name, url } = props;

    const [dimensions, updateDimensions] = useState<DimensionProps>({
        width: 0,
        height: 0
    });

    useEffect(() => {

        const listenToWindowSizeChangeEvents = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            updateDimensions({
                width: width,
                height: height
            });
        }

        listenToWindowSizeChangeEvents();

        window.addEventListener('resize', listenToWindowSizeChangeEvents);

        return () => window.removeEventListener('resize', listenToWindowSizeChangeEvents);

    }, []);

    const isTabletOrLower = dimensions.width <= 991;

    const icon = new IconsHelper().getIcon(name);
    if (icon){
        return <FontAwesomeIcon style={{
            paddingLeft: isTabletOrLower ? 3 : 5,
            paddingRight: isTabletOrLower ? 3 : 5,
            cursor: 'pointer'
        }} onClick={() => {
            window.open(url);
        }} fontSize={isTabletOrLower ? 20 : 28} icon={icon} />;
    } else {
        return null;
    }

}