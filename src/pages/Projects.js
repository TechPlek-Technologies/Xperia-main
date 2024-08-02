import React from "react";
import Layout from "../component2/wrapper/Layout";
import Banner from "../component2/projects/Banner";
import Content from "../component2/projects/Content";
import TextContent from "../component2/about/TextContent";

const Projects = () => {
  return (
    <Layout type={"other"}>
      <Banner/>
      <TextContent />
      <Content/>
    </Layout>
  );
};

export default Projects;
