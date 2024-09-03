import React, { useState } from "react";
import { domain } from "../../domain";

const Filter = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { label: "Show All", value: "*" },
    { label: "Branding", value: "branding" },
    { label: "Design", value: "design" },
    { label: "Photography", value: "photography" },
  ];

  return (
    <div className="mk-m-filter">
      <div className="mk-m-filter-items">
        {filters.map((filter) => (
          <a
            key={filter.value}
            className={`mk-m-filter-item ${
              activeFilter === filter.value ? "mk--active" : ""
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onFilterChange(filter.value);
            }}
          >
            {filter.label}
          </a>
        ))}
      </div>
    </div>
  );
};

const PortfolioItem = ({ project }) => {
  return (
    <>
      <article className="mk-grid-item mk-grid-item-wrap mk-item--full post-1322 portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio_category-photography">
        <div className="mk-portfolio-wrap content-position--below">
          <div className="mk-portfolio-image">
            <a
              href={`${domain}/project-description?title=${project.slug}`}
              className="mk-post-grid-image swm-anim mk--eye-cursor"
              target="_self"
            >
              <img
                fetchpriority="high"
                decoding="async"
                width={750}
                height={820}
                src={
                  project?.iconImages
                    ? `https://api.xperiagroup.in${project.iconImages.url}`
                    : ""
                }
                className="attachment-full size-full"
                alt=""
                srcSet={
                  project?.iconImages
                    ? `
<<<<<<< HEAD
                    https://api.xperiagroup.in${
                        JSON.parse(project.iconImages).url
                      } 750w,
                    https://api.xperiagroup.in${
                        JSON.parse(project.iconImages).url
                      } 274w
=======
                    https://api.xperiagroup.in${project.iconImages.url} 750w,
                    https://api.xperiagroup.in${project.iconImages.url} 274w
>>>>>>> 23aea98167bc6a762ae0c7c3c8e056618a086053
                  `
                    : ""
                }
                sizes="(max-width: 750px) 100vw, 750px"
              />
            </a>
          </div>
          {/* mk-portfolio-image */}
          <div className="mk-portfolio-content">
            <div className="mk-portfolio-content-holder">
              <div className="mk-portfolio-title-subtitle">
                <h3 className="mk-portfolio-title">
                  <a
                    href="https://techpartner.online/orbius/portfolio-item/nova-wade/"
                    target="_self"
                  >
                    {project.projectTitle}
                  </a>
                </h3>
                <div className="mk-portfolio-subtitle">{project.category}</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

const PortfolioGrid = ({ projects }) => {
  return (
    <div className="mk-grid-inner clear">
      {projects.map((project) => (
        <PortfolioItem key={project.id} project={project} />
      ))}
    </div>
  );
};

const Content = ({ projectData }) => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects =
    activeFilter === "*"
      ? projectData
      : projectData.filter((project) => project.category === activeFilter);

  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id="1261"
      className="elementor elementor-1261"
    >
      <div
        className="elementor-element elementor-element-33f69099 e-flex e-con-boxed e-con e-parent"
        data-id="33f69099"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-77590134 elementor-grid-4 elementor-grid-tablet-2 elementor-grid-mobile-1 join-items-no mk-portfolio-c-width-fullwidth mk-pf-excerpt-category elementor-widget elementor-widget-mk_portfolio_modern"
            data-id={77590134}
            data-element_type="widget"
            data-settings='{"columns":"4","content_position":"below","columns_tablet":"2","columns_mobile":"1","mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_portfolio_modern.default"
          >
            <div className="elementor-widget-container">
              <div
                className="mk-p-grid mk-portfolio-modern mk-filter--on mk-pagination--on mk-pagination-type--standard"
                data-options='{"post_type":"portfolio","next_page":"2","max_pages_num":2,"hover_cursor_on":"yes","portfolio_type":"modern","masonry_on":"no","enable_filter":"yes","filter_all_text":"Show All","pagination_type":"standard","title_tag":"h3","title_length":"100","show_subtitle":"yes","subtitle_type":"category","post_img_size":"full","taxonomy_filter":"portfolio_category","orderby":"date","order":"DESC","posts_per_page":12,"additional_params":"category","include_posts_cat":["15","17","19"],"content_position":"below"}'
              >
                {/* <Filter
                  activeFilter={activeFilter}
                  onFilterChange={handleFilterChange}
                /> */}
                <>
                  {/* content */}
                  <PortfolioGrid projects={filteredProjects} />
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
