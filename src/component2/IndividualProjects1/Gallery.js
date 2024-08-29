import React from 'react'

const Gallery = ({ data }) => {
  // Parse the projectImages string to a JSON object
  const projectImages = JSON.parse(data.projectImages);

  return (
    <div
      className="elementor-element elementor-element-21c0dd8d e-grid e-con-boxed e-con e-parent"
      data-id="21c0dd8d"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
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
                src={`https://xperia.api.regalstyling.com/uploads/${item.file.path}`}
                className="attachment-large size-large wp-image-1159"
                srcSet={`
                  https://xperia.api.regalstyling.com/uploads/${item.file.path}         750w,
                  https://xperia.api.regalstyling.com/uploads/${item.file.path} 300w,
                  https://xperia.api.regalstyling.com/uploads/${item.file.path} 150w,
                  https://xperia.api.regalstyling.com/uploads/${item.file.path} 100w
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