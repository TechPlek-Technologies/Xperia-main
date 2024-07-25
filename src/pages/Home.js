import React from "react";
import Layout from "../component2/wrapper/Layout";
import HomeBanner from "../component2/home/HomeBanner";
import Services from "../component2/home/Services";
import Projects from "../component2/home/Projects";
import Testimonial from "../component1/testimonial/Testimonial";
import Blog from "../component1/blog/Blog";

const Home = () => {
  return (
    <>
      <Layout>
        <HomeBanner />
        <Projects />
        <Services />
        <Testimonial/>
        <Blog/>
      </Layout>
    </>
  );
};

export default Home;
