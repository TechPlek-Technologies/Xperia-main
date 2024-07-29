import React, { useState } from "react";
import Style from "./Team.module.css";
import Cards from "./team/Cards";
import Button from "../../about/about/Button";

const Team = ({ Teamdata }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className={Style.wrapper}>
      <div className={Style.container}>
        {Teamdata.map((item, index) => (
          <Cards
            index={index}
            image={item.image}
            name={item.name}
            designation={item.designation}
            description={item.description}
            isLast={index === Teamdata.length - 1}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onHoverOut={() => setHoveredIndex(null)}
            isAnyHovered={hoveredIndex !== null}
          />
        ))}
      </div>
      <div className={Style.button}>
        <Button text={"View All"} src="" />
      </div>
    </div>
  );
};

export default Team;
