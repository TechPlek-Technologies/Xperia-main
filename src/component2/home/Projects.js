import React, { useEffect, useState } from "react";
import SectionHeading from "../common/section-heading";
import { FeaturedProjects, ProjectImages } from "./ProjectDemo";
import { FeatureData } from "../../data/home/Data";
import { useSelector } from "react-redux";
// Helper function to split the imageData array
const splitArray = (array) => {
  const length = array?.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Even length, split equally
    const firstHalf = array?.slice(0, middle);
    const secondHalf = array?.slice(middle);
    return { topImages: firstHalf, bottomImages: secondHalf };
  } else {
    // Odd length, second array gets one more element
    const firstHalf = array?.slice(0, middle + 1);
    const secondHalf = array?.slice(middle + 1);
    return { topImages: firstHalf, bottomImages: secondHalf };
  }
};

const Projects = () => {
  // const [firstHalf, secondHalf] = splitData(FeatureData.imageData);
  const { projectData } = useSelector((state) => state.projects);

  useEffect(() => {
    if (!projectData) {
      window.location.reload();
    }
  }, []);
  // const array = duplicateToLimit(projectData);
  const { topImages, bottomImages } = splitArray(
    projectData.filter((item) => item.homepage).slice(0, 8)
  );

  return (
    <>
      <SectionHeading title={"projects"} subTitle={"our portfolio"} />

      <div
        className="elementor-element elementor-element-7477b95c e-con-full e-flex e-con e-parent"
        data-id="7477b95c"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
        data-core-v316-plus="true"
        style={{ paddingBottom: "140px" }}
      >
        <div
          className="elementor-element elementor-element-629713b8 elementor-widget elementor-widget-mk_moving_projects"
          data-id="629713b8"
          data-element_type="widget"
          data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_moving_projects.default"
        >
          <div className="elementor-widget-container">
            <section
              className="mk-moving-projects mk-moving-projects-629713b8"
              id="629713b8"
            >
              <div className="mk-moving-projects-gap" />
              <div className="mk-moving-projects-holder">
                {topImages && <ProjectImages imageData={topImages} />}
                {bottomImages && <ProjectImages imageData={bottomImages} />}
                <div className="mk-moving-project-info">
                  <div className="mk-moving-project-info-bg" />
                  {projectData && <FeaturedProjects data={projectData} />}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
