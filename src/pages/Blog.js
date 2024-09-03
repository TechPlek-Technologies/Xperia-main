import React from "react";
import Layout from "../component2/wrapper/Layout";
import { domain } from "../domain";
import { useSelector } from "react-redux";

const Blog = () => {
  // Static data for blog posts

  // const blog = JSON.parse(localStorage.getItem('Blogs'));
  const { blogData: blog } = useSelector((state) => state.blogs);

  function formatDate(isoDateStr) {
    const date = new Date(isoDateStr);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <Layout type={"other"}>
      <div
        id="content"
        className="swm-main-container swm-site-content swm-anim"
      >
        <div className="swm_site_content_wrap swm-container" />
        <div
          data-elementor-type="wp-page"
          data-elementor-id={1267}
          className="elementor elementor-1267"
        >
          <div
            className="elementor-element elementor-element-2158acdf e-con-full e-flex e-con e-parent"
            data-id="2158acdf"
            data-element_type="container"
            data-settings='{"mk_ext_is_sticky":"false"}'
            data-core-v316-plus="true"
          >
            <div
              className="elementor-element elementor-element-2552d0e3 elementor-widget elementor-widget-mk_section_heading"
              data-id="2552d0e3"
              data-element_type="widget"
              data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
              data-widget_type="mk_section_heading.default"
            >
              <div className="elementor-widget-container">
                <div className="mk-section-heading">
                  <h4 className="mk-section-heading-title">
                    <span>blogs</span>
                  </h4>
                  <span className="mk-section-heading-subtitle swm-hide-tablet">
                    / discover the news
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-6a07fb6e e-con-full e-flex e-con e-parent"
            data-id="6a07fb6e"
            data-element_type="container"
            data-settings='{"mk_ext_is_sticky":"false"}'
            data-core-v316-plus="true"
          >
            <div
              className="elementor-element elementor-element-6f837e7e e-con-full e-flex e-con e-child"
              data-id="6f837e7e"
              data-element_type="container"
              data-settings='{"mk_ext_is_sticky":"false"}'
            />
            <div
              className="elementor-element elementor-element-52156b27 e-con-full e-flex e-con e-child"
              data-id="52156b27"
              data-element_type="container"
              data-settings='{"mk_ext_is_sticky":"false"}'
            >
              <div
                className="elementor-element elementor-element-48c8b4e0 mk-post-image-zoom-yes elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-mk_blog_posts"
                data-id="48c8b4e0"
                data-element_type="widget"
                data-settings='{"columns":"3","columns_tablet":"2","columns_mobile":"1","mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                data-widget_type="mk_blog_posts.default"
              >
                <div className="elementor-widget-container">
                  <div
                    className="mk-p-grid mk--no-bottom-space mk-pagination--off"
                    data-options='{"post_type":"post","next_page":"2","max_pages_num":2,"masonry_on":"no","enable_filter":"no","button_text":"read more","pagination_type":"no-pagination","title_tag":"h3","title_length":100,"show_excerpt":"yes","excerpt_length":107,"show_metas":"yes","show_date":"yes","show_category":"yes","show_image":"yes","post_img_size":"full","display_style":"st2","taxonomy_filter":"category","orderby":"date","order":"DESC","posts_per_page":9,"exclude_posts_cat":["22"]}'
                  >
                    {/* Dynamic content generation */}
                    <div className="mk-grid-inner clear">
                      {blog.map((post) => (
                        <article
                          key={post.id}
                          className="mk-grid-item mk-grid-item-wrap mk-item--full"
                        >
                          <div className="mk-post-wrap">
                            <div className="mk-post-content">
                              <div className="mk-post-meta highlight-text">
                                <div className="mk-post-meta-date-separator" />
                                <a
                                  href={`${domain}/blog?title=${post.slug}`}
                                  className="entry-date published updated"
                                >
                                  {formatDate(post.createdAt)}
                                </a>
                                <div className="mk-post-meta-separator" />
                                <a
                                  href={`${domain}/blog?title=${post.slug}`}
                                  rel="tag"
                                >
                                  {post.category}
                                </a>
                                <div className="mk-post-meta-separator" />
                              </div>
                              <h3 className="mk_post_title">
                                <a href={`${domain}/blog?title=${post.slug}`}>
                                  {post.blogTitle}
                                </a>
                              </h3>
                              <div className="mk-post-image">
                                <a
                                  href={`${domain}/blog?title=${post.slug}`}
                                  className="mk-post-grid-image swm-anim"
                                >
                                  <img
                                    loading="lazy"
                                    decoding="async"
                                    width={939}
                                    height={569}
                                    src={`https://api.xperiagroup.in/${
                                      JSON.parse(post.iconImage).url
                                    }`}
                                    className="attachment-full size-full"
                                    alt="icon"
                                  />
                                </a>
                              </div>
                              <div className="mk_post_excerpt">
                                {post.description}
                              </div>
                              <div className="mk-post-button">
                                <a href={`${domain}/blog?title=${post.slug}`}>
                                  <span className="mk-post-button-arrow-start" />
                                  <span className="mk-post-button-text">
                                    read more
                                  </span>
                                  <span className="mk-post-button-arrow-end" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </Layout>
  );
};

export default Blog;
