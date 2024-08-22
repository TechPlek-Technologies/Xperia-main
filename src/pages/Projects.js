import React from "react";
import Layout from "../component2/wrapper/Layout";
import Banner from "../component2/projects/Banner";
import Content from "../component2/projects/Content";

const Projects = ({ projectData }) => {
  return (
    <Layout type={"other"}>
      {projectData && <Banner projectData={projectData} />}
      {projectData && <Content projectData={projectData} />}
    </Layout>
  );
};

export default Projects;
