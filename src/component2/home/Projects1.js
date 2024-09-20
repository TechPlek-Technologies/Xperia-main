import React, { useEffect, useState } from "react";
import SectionHeading from "../common/section-heading";
import { FeaturedProjects, ProjectImages } from "./ProjectDemo";
import { useSelector } from "react-redux";
import Button from "../../component/home/about/about/Button";
import { domain } from "../../domain";
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
  const [top, setTop] = useState(null);
  const [bottom, setBottom] = useState(null);

  const [screenSize, setScreenSize] = React.useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  React.useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    if (projectData) {
      const { topImages, bottomImages } = splitArray(
        projectData.filter((item) => item.homepage).slice(0, 8)
      );
      setTop(topImages);
      setBottom(bottomImages);
    }
  }, []);
  // const array = duplicateToLimit(projectData);


  console.log("projectData",projectData)
  return (
    <>
      <SectionHeading title={"projects"} subTitle={"our portfolio"} />

      <div
        className="elementor-element elementor-element-7477b95c e-con-full e-flex e-con e-parent e-lazyloaded"
        data-id="7477b95c"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
        style={{ paddingBottom: "140px", paddingTop: "100px" }}
      >
        <div
          className="elementor-element elementor-element-629713b8 elementor-widget elementor-widget-mk_moving_projects"
          data-id="629713b8"
          data-element_type="widget"
          data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_moving_projects.default"
        >
          <div className="elementor-widget-container">
            <div
              className="pin-spacer pin-spacer-clientPin"
              style={{
                order: 0,
                placeSelf: "auto",
                gridArea: "auto",
                zIndex: "auto",
                float: "none",
                flexShrink: 1,
                display: "block",
                margin: 0,
                inset: "auto",
                position: "relative",
                flexBasis: "auto",
                overflow: "visible",
                boxSizing: "border-box",
                width: 1349,
                height: 1026,
                padding: "0px 0px 523px",
              }}
            >
              <section
                className="mk-moving-projects mk-moving-projects-629713b8"
                id="629713b8"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  inset: "0px auto auto 0px",
                  margin: 0,
                  maxWidth: 1349,
                  width: 1349,
                  maxHeight: "503.344px",
                  height: "503.344px",
                  padding: 0,
                  transform: "translate(0px, 0px)",
                }}
              >
                <div className="mk-moving-projects-gap" />
                <div className="mk-moving-projects-holder">
                  <div
                    className="mk-moving-projects-images"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    {" "}
                    <div className="mk-moving-projects-first-img">
                      <div
                        className="mk-moving-projects-img"
                        data-projectimage="1fir-68400"
                      >
                        <a
                          href="https://techpartner.online/orbius/portfolio-item/casa-mondo-2/"
                          className="mk-moving-projects-link"
                        >
                          <span className="mk-moving-projects-mobile-title">
                            urban blend
                          </span>
                          <img
                            loading="lazy"
                            decoding="async"
                            width={749}
                            height={539}
                            src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project1.jpg"
                            className="attachment-full size-full"
                            alt=""
                            srcSet="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project1.jpg 749w, https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project1-300x216.jpg 300w"
                            sizes="(max-width: 749px) 100vw, 749px"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="mk-moving-projects-other-img">
                      <div
                        className="mk-moving-projects-img"
                        data-projectimage="2fir-81812"
                      >
                        <a
                          href="https://techpartner.online/orbius/portfolio-item/casa-mondo-2/"
                          className="mk-moving-projects-link"
                        >
                          <span className="mk-moving-projects-mobile-title">
                            bright path
                          </span>
                          <img
                            loading="lazy"
                            decoding="async"
                            width={750}
                            height={539}
                            src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project2.jpg"
                            className="attachment-full size-full"
                            alt=""
                            srcSet="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project2.jpg 750w, https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project2-300x216.jpg 300w"
                            sizes="(max-width: 750px) 100vw, 750px"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="mk-moving-projects-other-img">
                      <div
                        className="mk-moving-projects-img"
                        data-projectimage="3fir-47890"
                      >
                        <a
                          href="https://techpartner.online/orbius/portfolio-item/casa-mondo-2/"
                          className="mk-moving-projects-link"
                        >
                          <span className="mk-moving-projects-mobile-title">
                            earth bound
                          </span>
                          <img
                            loading="lazy"
                            decoding="async"
                            width={750}
                            height={539}
                            src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project4.jpg"
                            className="attachment-full size-full"
                            alt=""
                            srcSet="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project4.jpg 750w, https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project4-300x216.jpg 300w"
                            sizes="(max-width: 750px) 100vw, 750px"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="mk-moving-projects-other-img">
                      <div
                        className="mk-moving-projects-img"
                        data-projectimage="4fir-52948"
                      >
                        <a
                          href="https://techpartner.online/orbius/portfolio-item/casa-mondo-2/"
                          className="mk-moving-projects-link"
                        >
                          <span className="mk-moving-projects-mobile-title">
                            casa mondo
                          </span>
                          <img
                            loading="lazy"
                            decoding="async"
                            width={750}
                            height={539}
                            src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project3.jpg"
                            className="attachment-full size-full"
                            alt=""
                            srcSet="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project3.jpg 750w, https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project3-300x216.jpg 300w"
                            sizes="(max-width: 750px) 100vw, 750px"
                          />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                  <div
                    className="mk-moving-projects-images"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    {" "}
                    <div className="mk-moving-projects-first-img">
                      <div
                        className="mk-moving-projects-img"
                        data-projectimage="1sec-92067"
                      >
                        <a
                          href="https://techpartner.online/orbius/portfolio-item/casa-mondo-2/"
                          className="mk-moving-projects-link"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width={750}
                            height={539}
                            src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project6.jpg"
                            className="attachment-full size-full"
                            alt=""
                            srcSet="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project6.jpg 750w, https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project6-300x216.jpg 300w"
                            sizes="(max-width: 750px) 100vw, 750px"
                          />
                          <span className="mk-moving-projects-mobile-title">
                            cloud scape
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="mk-moving-projects-other-img">
                      <div
                        className="mk-moving-projects-img"
                        data-projectimage="2sec-50067"
                      >
                        <a
                          href="https://techpartner.online/orbius/portfolio-item/casa-mondo-2/"
                          className="mk-moving-projects-link"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width={750}
                            height={539}
                            src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project5.jpg"
                            className="attachment-full size-full"
                            alt=""
                            srcSet="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project5.jpg 750w, https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project5-300x216.jpg 300w"
                            sizes="(max-width: 750px) 100vw, 750px"
                          />
                          <span className="mk-moving-projects-mobile-title">
                            angin surga
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="mk-moving-projects-other-img">
                      <div
                        className="mk-moving-projects-img"
                        data-projectimage="3sec-70384"
                      >
                        <a
                          href="https://techpartner.online/orbius/portfolio-item/casa-mondo-2/"
                          className="mk-moving-projects-link"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width={750}
                            height={539}
                            src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project7.jpg"
                            className="attachment-full size-full"
                            alt=""
                            srcSet="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project7.jpg 750w, https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project7-300x216.jpg 300w"
                            sizes="(max-width: 750px) 100vw, 750px"
                          />
                          <span className="mk-moving-projects-mobile-title">
                            cloud scape
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="mk-moving-projects-other-img">
                      <div
                        className="mk-moving-projects-img"
                        data-projectimage="4sec-26161"
                      >
                        <a
                          href="https://techpartner.online/orbius/portfolio-item/casa-mondo-2/"
                          className="mk-moving-projects-link"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width={750}
                            height={539}
                            src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project8.jpg"
                            className="attachment-full size-full"
                            alt=""
                            srcSet="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project8.jpg 750w, https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-project8-300x216.jpg 300w"
                            sizes="(max-width: 750px) 100vw, 750px"
                          />
                          <span className="mk-moving-projects-mobile-title">
                            urban blend
                          </span>
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                  <div className="mk-moving-project-info">
                    <div
                      className="mk-moving-project-info-bg"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                      }}
                    />
                    <div className="stat-inner">
                      <span className="stat-main-title">
                        <span
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform:
                              "translate3d(0px, 0px, 0px) scale(1.0852, 1.0852)",
                          }}
                          className=""
                        >
                          Featured Projects
                        </span>
                      </span>
                      <div className="stat-data" data-stat="1fir-68400">
                        <span>urban blend</span>
                      </div>
                      <div className="stat-data" data-stat="2fir-81812">
                        <span>bright path</span>
                      </div>
                      <div
                        className="stat-data"
                        data-stat="3fir-47890"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 0,
                          transform: "translate(0%, -50%) scale(0.5, 0.5)",
                        }}
                      >
                        <span>earth bound</span>
                      </div>
                      <div className="stat-data" data-stat="4fir-52948">
                        <span>casa mondo</span>
                      </div>
                      <div
                        className="stat-data"
                        data-stat="1sec-92067"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 0,
                          transform: "translate(0%, -50%) scale(0.5, 0.5)",
                        }}
                      >
                        <span>cloud scape</span>
                      </div>
                      <div className="stat-data" data-stat="2sec-50067">
                        <span>angin surga</span>
                      </div>
                      <div className="stat-data" data-stat="3sec-70384">
                        <span>cloud scape</span>
                      </div>
                      <div className="stat-data" data-stat="4sec-26161">
                        <span>urban blend</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>{" "}
          </div>
          {screenSize.width <= 880 ? (
            <Button text={"view all"} src={`${domain}/projects`} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Projects;
