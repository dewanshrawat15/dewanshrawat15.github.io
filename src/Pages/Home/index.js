import { useEffect, useState } from "react";

import About from "../../Components/About";
import Hero from "../../Components/Hero";

import LoadingScreen from "../LoadingScreen";

import { getWebsiteData } from "../../utils/firebase";
import { delay } from "../../utils/utils";

export default function Home(){
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [websiteData, updateWebsiteData] = useState({});

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);

        const fetchDataFromFirebase = async () => {
            const data = await getWebsiteData();
            await delay(500);
            updateWebsiteData(data);
        }

        fetchDataFromFirebase();
    }, []);
    const childrenProps = {
        data: websiteData,
        dimensions: dimensions
    }
    if(Object.keys(websiteData).length === 0){
        return <LoadingScreen />
    }
    return (
        <>
            <Hero {...childrenProps} />
            <About {...childrenProps} />
        </>
    );
}