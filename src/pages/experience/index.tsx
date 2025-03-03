import { useEffect, useRef } from "react";
import { setInitialData } from "../../utils/hooks";

export const ExperiencePage = () => {
  const isDataInitialized = useRef<boolean | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (isDataInitialized.current === null) {
        isDataInitialized.current = true;
        await setInitialData();
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="font-poppins text-2xl">Experience Page</h1>
    </>
  );
};
