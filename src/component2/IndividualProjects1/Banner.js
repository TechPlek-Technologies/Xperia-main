import React from "react";

const Banner = ({ data, title }) => {

  return (
    <div
      className="elementor-element elementor-element-4b0b5cb5 e-con-full e-flex e-con e-parent"
      data-id="4b0b5cb5"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
    >
      <div
        className="elementor-element elementor-element-32580b5a e-con-full e-flex e-con e-child"
        data-id="32580b5a"
        data-element_type="container"
        // Uncomment the next line if you want to use the settings
        data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
        style={{
          backgroundImage: `url(${process.env.REACT_APP_API_URL}${
            JSON.parse(data.bannerImages).url
          })`,
        }}
      />
      <div
        className="elementor-element elementor-element-3e26eb8e e-con-full e-flex e-con e-child"
        data-id="3e26eb8e"
        data-element_type="container"
        data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
      >
        <div
          className="elementor-element elementor-element-3245cdcd mk-title-align--left elementor-widget elementor-widget-mk_title"
          data-id="3245cdcd"
          data-element_type="widget"
          data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_title.default"
        >
          <div className="elementor-widget-container">
            <div className="mk-title mk-title-default">
              <h2 className="mk-title-heading swm-hide-none">
                <span>{data.projectTitle}</span>
              </h2>
              <div className="mk-title-subtitle swm-hide-none">
                {data.firstName}{" "}{data.lastName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;