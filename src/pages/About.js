import React from "react";
import Layout from "../component2/wrapper/Layout";
import Banner from "../component2/about/Banner";
import Testimonial from "../component1/testimonial/Testimonial";
import TextContent from "../component2/about/TextContent";
import Projects from "../component2/about/Projects";
import BottomSection from "../component2/about/BottomSection";

const About = () => {
  return (
    <Layout>
        <Banner />
        <TextContent />
        <Projects/>
        <BottomSection/>
        <Testimonial />
    </Layout>
  );
};

export default About;
