import React from 'react'

const Gallery = ({ data }) => {
  // Parse the projectImages string to a JSON object
  const projectImages = data.projectImages;

  return (
    <div
      className="elementor-element elementor-element-21c0dd8d e-grid e-con-boxed e-con e-parent"
      data-id="21c0dd8d"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
      style={{marginTop:"50px"}}
    >
      <div className="e-con-inner">
        {projectImages.map((item, index) => (
          <div
            key={index}
            className="elementor-element elementor-element-6698e33e elementor-widget elementor-widget-image"
            data-id={`project-image-${index}`}
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="image.default"
          >
            <div className="elementor-widget-container">
              <img
                loading="lazy"
                decoding="async"
                width={750}
                height={748}
                alt="Gallery Img"
                src={`https://api.xperiagroup.in${item.url}`}
                className="attachment-large size-large wp-image-1159"
                srcSet={`
                  https://api.xperiagroup.in${item.url}         750w,
                  https://api.xperiagroup.in${item.url} 300w,
                  https://api.xperiagroup.in${item.url} 150w,
                  https://api.xperiagroup.in${item.url} 100w
                `}
                sizes="(max-width: 750px) 100vw, 750px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery