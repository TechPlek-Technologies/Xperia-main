import React from "react";
import Style from './AwardItems.module.css'
const AwardItems = ({ imageData, activeId,handleMouseEnter,handleMouseLeave }) => {
  return (
    <div className="mk-awards-items">
      <div className="mk-awards-items-list">
        <div className="mk-awards-items-list-holder">
          {imageData.map((image) => (
            <article
              className={`mk-awards-item swm-anim ${
                activeId === image.id ? "active-item" : ""
              }`}
              data-index={image.id}
              onMouseEnter={() => handleMouseEnter(image.id)}
            >
              <a
                className="mk-awards-link"
                href="https://techpartner.online/orbius/about-us/"
              />
              <div className="mk-awards-content">
                <div className="mk-awards-year-holder swm-anim swm-anim swm-hide-none">
                  <span className="mk-awards-year swm-anim">{image.year}</span>
                  <span className="mk-awards-year-line swm-anim" />
                </div>
                <div className="mk-awards-titleSubtitle">
                  <div className="mk-awards-text swm-anim">
                    <h4 className="mk-awards-title swm-anim">
                      <span className={image.span.toUpperCase()==="GOLD" ? Style.gold : image.span.toUpperCase()==="SILVER" ? Style.silver : Style.bronze  }>{image.span}</span>{" "}{image.title}
                    </h4>
                    <span className="mk-awards-subtitle swm-anim swm-hide-none">
                      {image.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default AwardItems;
