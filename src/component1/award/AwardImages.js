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
            <a className="mk-awards-link" href={image.href}>
              <img
                loading="lazy"
                decoding="async"
                width={750}
                height={953}
                src={image.src750x953}
                className="attachment-full size-full"
                alt={image.title}
                srcset={`${image.src750x953} 750w,  ${image.src236x300} 236w`}
                sizes="(max-width: 750px) 100vw, 750px"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardImages;
