import React from "react";
import Content from "../component2/projects/Content";
import Layout2 from "../component2/wrapper/Layout2";

const Projects = ({ projectData }) => {
  return (
    <Layout2>
      {/* {projectData && <Banner projectData={projectData} />} */}
      {projectData && <Content projectData={projectData} />}
    </Layout2>
  );
};

export default Projects;
