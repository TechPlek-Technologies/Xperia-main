import { FeatureData } from "../../data/home/Data";

export const ProjectImages = ({ imageData }) => {
    return (
      <div className="mk-moving-projects-images">
        {imageData.map((project, index) => (
          <div key={index} className={`mk-moving-projects-${index === 0 ? 'first' : 'other'}-img`}>
            <div className="mk-moving-projects-img" data-projectimage={project.dataProjectImage}>
              <a href={`https://techpartner.online/orbius/portfolio-item/casa-mondo-2/`} className="mk-moving-projects-link">
                <span className="mk-moving-projects-mobile-title">{project.title.toLowerCase()}</span>
                <img
                  loading="lazy"
                  decoding="async"
                  width={750}
                  height={539}
                  // src={project.img.path}
                  src={project.img.main749x359}
                  className="attachment-full size-full"
                  alt={project.title}
                  // srcSet={`${project.img.path} 749w, ${project.img.path.replace('.webp', '-300x216.webp')} 300w`}
                  srcSet={`${project.img.main749x359} 749w, ${project.img.sub300x216} 300w`}
                  sizes="(max-width: 749px) 100vw, 749px"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
 export const FeaturedProjects = () => {
    return (
      <div className="stat-inner">
        <span className="stat-main-title">
          <span>featured projects</span>
        </span>
        {FeatureData.imageData.map((project, index) => (
          <div key={index} className="stat-data" data-stat={project.dataStat}>
            <span>{project.title.toLowerCase()}</span>
          </div>
        ))}
      </div>
    );
  };