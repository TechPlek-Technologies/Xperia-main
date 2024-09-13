import { domain } from "../../domain";

export const ProjectImages = ({ imageData }) => {
  return (
    <div className="mk-moving-projects-images">
      {imageData.map((project, index) => (
        <div
          key={index}
          className={`mk-moving-projects-${
            index === 0 ? "first" : "other"
          }-img`}
        >
          <div
            className="mk-moving-projects-img"
            data-projectimage={project.id}
          >
            <a href={`${domain}/project-description?title=${project.slug}`} className="mk-moving-projects-link">
              <span className="mk-moving-projects-mobile-title">
                {project?.projectTitle?.toLowerCase()}
              </span>
              <img
                loading="lazy"
                decoding="async"
                width={750}
                height={539}
                // src={project.img.path}
                src={`https://api.xperiagroup.in/${project.iconImages?.url}`}
                className="attachment-full size-full"
                alt="projectImage"
                // srcSet={`${project.img.path} 749w, ${project.img.path.replace('.webp', '-300x216.webp')} 300w`}
                srcSet={`https://api.xperiagroup.in/${project.iconImages?.url} 749w, https://api.xperiagroup.in/${project.iconImages?.url} 300w`}
                sizes="(max-width: 749px) 100vw, 749px"
                style={{width:"750px"}}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export const FeaturedProjects = ({ data }) => {
  return (
    <div className="stat-inner">
      <span className="stat-main-title">
        <span>featured projects</span>
      </span>
      {data.map((project, index) => (
        <div key={index} className="stat-data" data-stat={project.id}>
          <span>{project.projectTitle.toLowerCase()}</span>
        </div>
      ))}
    </div>
  );
};
