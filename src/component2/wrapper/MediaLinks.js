import React from "react";

const MediaLinks = () => {
  return (
    <div className="elementor-widget-container">
      <ul className="elementor-icon-list-items elementor-inline-items">
        <li className="elementor-icon-list-item elementor-inline-item">
          <a href="https://www.facebook.com/">
            <span className="elementor-icon-list-text">fb</span>
          </a>
        </li>
        <li className="elementor-icon-list-item elementor-inline-item">
          <a href="https://twitter.com/">
            <span className="elementor-icon-list-text">tw</span>
          </a>
        </li>
        <li className="elementor-icon-list-item elementor-inline-item">
          <a href="https://www.instagram.com/">
            <span className="elementor-icon-list-text">ln</span>
          </a>
        </li>
        <li className="elementor-icon-list-item elementor-inline-item">
          <a href="https://pinterest.com/">
            <span className="elementor-icon-list-text">pi</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MediaLinks;
