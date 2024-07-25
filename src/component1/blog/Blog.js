import React from "react";
import BlogContent from "./BlogContent";

const Blog = () => {
  return (
    <div
      className="elementor-element elementor-element-677c98f9 e-con-full e-flex e-con e-parent"
      data-id="677c98f9"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
      data-core-v316-plus="true"
    >
      <div
        className="elementor-element elementor-element-73ed76 e-con-full e-flex e-con e-child"
        data-id="73ed76"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
      />
      <div
        className="elementor-element elementor-element-aae9b87 e-con-full e-flex e-con e-child"
        data-id="aae9b87"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
      >
        <div
          className="elementor-element elementor-element-39e69b15 mk-post-image-zoom-yes elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-mk_blog_posts"
          data-id="39e69b15"
          data-element_type="widget"
          data-settings='{"columns":"3","columns_tablet":"2","columns_mobile":"1","mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_blog_posts.default"
        >
          <div className="elementor-widget-container">
            <div
              className="mk-p-grid mk--no-bottom-space mk-pagination--off"
              data-options='{"post_type":"post","next_page":"2","max_pages_num":1,"masonry_on":"no","enable_filter":"no","button_text":"read more","pagination_type":"no-pagination","title_tag":"h3","title_length":100,"show_excerpt":"yes","excerpt_length":107,"show_metas":"yes","show_date":"yes","show_category":"yes","show_image":"yes","post_img_size":"full","display_style":"st2","taxonomy_filter":"category","orderby":"date","order":"DESC","posts_per_page":3,"include_posts_cat":["20"]}'
            >
              {/* filter */}
              <p className="mk-pagination-spinner mk-filter-pagination-spinner">
                <i className="fas fa-spinner" />
              </p>
              {/* content */}
              <div className="mk-grid-inner clear">
                <BlogContent/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
