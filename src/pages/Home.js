import React, { useEffect, useState } from "react";
import Layout from "../component2/wrapper/Layout";
import HomeBanner from "../component2/home/HomeBanner";
import Services from "../component2/home/Services";
import Projects from "../component2/home/Projects";
import Testimonial from "../component1/testimonial/Testimonial";
import Blog from "../component1/blog/Blog";
import Award from "../component1/award/Award";
import AboutSection from "../component/home/AboutSection";
import Team from "../component2/home/Team";
import { useSelector } from "react-redux";

const Home = () => {
  const { serviceData } = useSelector((state) => state.service);

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/wp-content/mk-widgets.min.js";
    script.id = "mk-widgets-js";
    // Append the script to the body
    document.body.appendChild(script);
    // Cleanup function to remove the script when the component unmounts
  }, []);
  return (
    <>
      <Layout>
        <div
          data-elementor-type="wp-page"
          data-elementor-id={1255}
          className="elementor elementor-1255"
        >
          <HomeBanner />

          {/* { !isSafari() && screenSize.width > 980 ? <SafariServices services={serviceData}/> : <Services services={serviceData} />} */}
          <Services services={serviceData} />
          <AboutSection />
          <Projects />
          <Award />
          <Team />
          <Testimonial />
          <Blog />
        </div>
      </Layout>
    </>
  );
};

export default Home;
