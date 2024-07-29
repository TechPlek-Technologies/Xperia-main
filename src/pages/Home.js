import React from "react";
import Layout from "../component2/wrapper/Layout";
import HomeBanner from "../component2/home/HomeBanner";
import Services from "../component2/home/Services";
import Projects from "../component2/home/Projects";
import Testimonial from "../component1/testimonial/Testimonial";
import Blog from "../component1/blog/Blog";
import Award from "../component1/award/Award";
import AboutUs from "../component2/home/AboutUs";
import AboutSection from "../component/home/AboutSection";
import TeamSection from "../component/home/Team/TeamSection";
import Team from "../component2/home/Team";

const Home = () => {
  return (
    <>
      <Layout>
        <HomeBanner />
        {/* about */}
        <AboutSection/>
        <AboutUs/>
        <Award/>
        <Projects />
        <Services />
        {/* Team */}
        <Team/>
        <TeamSection/>
        <Testimonial/>
        <Blog/>
      </Layout>
    </>
  );
};

export default Home;
