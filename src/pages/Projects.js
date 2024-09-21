import React, { useEffect } from "react";
import Content from "../component2/projects/Content";
import Layout2 from "../component2/wrapper/Layout2";

const Projects = ({ projectData }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/wp-content/mk-widgets.min.js";
    script.id = "mk-widgets-js";
    // Append the script to the body
    document.body.appendChild(script);
    // Cleanup function to remove the script when the component unmounts
  }, []);
  return (
    <Layout2>
      {/* {projectData && <Banner projectData={projectData} />} */}
      {projectData && <Content projectData={projectData} />}
    </Layout2>
  );
};

export default Projects;
