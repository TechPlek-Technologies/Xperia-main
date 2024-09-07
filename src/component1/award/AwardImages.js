import React from "react";

const AwardImages = ({ imageData, activeId }) => {
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
            <p className="mk-awards-link">
              <img
                loading="lazy"
                decoding="async"
                width={750}
                height={953}
                src={`https://api.xperiagroup.in${image.awardImage.url}`}
                className="attachment-full size-full"
                alt={image.awardImage.name}
                srcset={`https://api.xperiagroup.in${image.awardImage.url} 750w,  https://api.xperiagroup.in${image.awardImage.url} 236w`}
                sizes="(max-width: 750px) 100vw, 750px"
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardImages;
