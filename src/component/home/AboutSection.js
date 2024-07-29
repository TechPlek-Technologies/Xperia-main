import React, { useEffect, useState } from "react";
import { AboutData } from "../../data/home/Data";
import About from "./about/About";
import AboutMobile from "./about/responsive/AboutMobile";

const AboutSection = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div id="about-section">
      {screenSize.width > 900 && (
      <About AboutData={AboutData.aboutInnerData}/>)}
       {screenSize.width <= 900 && (
        <AboutMobile AboutData={AboutData.aboutInnerData}/>)}
    </div>
  );
};

export default AboutSection;
