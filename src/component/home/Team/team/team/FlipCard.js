import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Style from "./FlipCard.module.css";

const FlipCard = ({ index, image, name, description, designation }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (index) => {
    setIsFlipped(!isFlipped);
    setHoveredIndex(index);
  };

  return (
    <div className={Style.carcard}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* Front side */}
        <div
          className="card-front"
          onClick={handleClick}
          style={{
            cursor: "pointer",
          }}
          onMouseEnter={() =>
            setHoveredIndex(index)
          }
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            key={index}
            className={`${Style.teaminner} ${
              hoveredIndex !== null && hoveredIndex !== index ? Style.blur : ""
            }`}
           
          >
            <div className={Style.image}>
              <img
                src={image.path}
                alt={image.name}
                className={`${Style.imageinner} ${
                  selectedIndex === index ? Style.selectedImage : ""
                }`}
              />
            </div>
            <div className={Style.teamName}>
              <div className={Style.teamNameInner}>
                {name}
              </div>
            </div>
          </div>
        </div>
        {/* Back side */}


        <div className={Style.hoverImageStyle} onClick={handleClick}>
        <div className={Style.DetailHeading}>{name}</div> 
        <div className={Style.Detaildesign}>{designation}</div>
       <div className={Style.Detailpara}>{description}</div>
      </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
