import React from "react";
import "./Cards.css"; // Assuming you have a separate CSS file for styles

const Cards = ({
  image,
  name,
  designation,
  description,
  isLast,
  isHovered,
  onHover,
  onHoverOut,
  isAnyHovered,
}) => {
  return (
    <div className={`container1 ${isLast ? "last-card" : ""}`}>
      <div
        className={`card  ${
          isAnyHovered ? (isHovered ? "clear" : "blurred") : ""
        }`}
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
      >
        <div className="slide slide1">
          <div className="content">
            <div className="icon">
              <img className="image" src={image.path} alt={name} />
            </div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="content">
            <div className="DetailHeading">
              <span className="detail_span">
              {name}
              </span>
            </div>
            <div className="Detaildesign">{designation}</div>
            <div className="Detailpara">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
