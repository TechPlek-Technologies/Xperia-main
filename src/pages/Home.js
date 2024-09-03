import React, { useEffect } from "react";
import Layout from "../component2/wrapper/Layout";
import HomeBanner from "../component2/home/HomeBanner";
import Services from "../component2/home/Services";
import Projects from "../component2/home/Projects";
import Testimonial from "../component1/testimonial/Testimonial";
import Blog from "../component1/blog/Blog";
import Award from "../component1/award/Award";
import AboutSection from "../component/home/AboutSection";
import Team from "../component2/home/Team";

const Home = () => {
  
  return (
    <>
      <Layout>
        <div
          data-elementor-type="wp-page"
          data-elementor-id={1255}
          className="elementor elementor-1255"
        >
          <HomeBanner />

          <Services />
          <AboutSection />
          {/* <Projects /> */}
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
