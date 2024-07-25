import React from "react";

const AwardImages = ({imageData,activeId, data }) => {
  console.log(data);


  return (
    <div className="mk-awards-images">
      <div className="mk-awards-images-holder">
        {imageData.map((image) => (
          <div
            key={image.id}
            id={image.id}
            className={`mk-awards-image ${
              activeId === image.id ? "active-item" : ""
            }`}
          >
            <a className="mk-awards-link" href={image.href}>
              <img
                loading="lazy"
                decoding="async"
                width={750}
                height={953}
                src={image.src}
                className="attachment-full size-full"
                alt=""
                srcSet={image.srcSet}
                sizes={image.sizes}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardImages;
