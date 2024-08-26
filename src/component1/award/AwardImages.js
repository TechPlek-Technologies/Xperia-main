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
            <a className="mk-awards-link" href={"#"}>
              <img
                loading="lazy"
                decoding="async"
                width={750}
                height={953}
                src={`${process.env.REACT_APP_API_URL}${JSON.parse(image.awardImage).url}`}
                className="attachment-full size-full"
                alt={JSON.parse(image.awardImage).name}
                srcset={`${process.env.REACT_APP_API_URL}${JSON.parse(image.awardImage).url} 750w,  ${process.env.REACT_APP_API_URL}${JSON.parse(image.awardImage).url} 236w`}
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
