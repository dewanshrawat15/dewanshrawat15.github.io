import { useEffect, useState } from "react"

const checkIfTabletOrMobileUtil = () => window.innerWidth <= 991;

export const useCheckIfTabletOrMobile = () => {
    const [isTabletOrMobile, updateIfTabletOrMobile] = useState(checkIfTabletOrMobileUtil());

    useEffect(() => {
        const onResizeHandler = () => {
            updateIfTabletOrMobile(checkIfTabletOrMobileUtil());
        }

        window.addEventListener('resize', onResizeHandler);

        return () => {
            window.removeEventListener('resize', onResizeHandler);
        }
    }, []);

    return isTabletOrMobile;
}