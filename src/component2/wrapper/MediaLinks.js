import React from "react";

const MediaLinks = ({settingsData}) => {
  return (
    <div className="elementor-widget-container">
      <ul className="elementor-icon-list-items elementor-inline-items">
        <li className="elementor-icon-list-item elementor-inline-item">
          <a href={settingsData?.facebook}>
            <span className="elementor-icon-list-text">fb</span>
          </a>
        </li>
        <li className="elementor-icon-list-item elementor-inline-item">
          <a href={settingsData?.instagram}>
            <span className="elementor-icon-list-text">In</span>
          </a>
        </li>
        <li className="elementor-icon-list-item elementor-inline-item">
          <a href={settingsData?.x}>
            <span className="elementor-icon-list-text">Li</span>
          </a>
        </li>
        <li className="elementor-icon-list-item elementor-inline-item">
          <a href={settingsData?.youtube}>
            <span className="elementor-icon-list-text">Yt</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MediaLinks;
