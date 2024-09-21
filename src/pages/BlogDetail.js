import React from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../component2/wrapper/Layout";
import Breadcrumb from "../component2/Blog/Breadcrumb";
import Banner from "../component2/Blog/Banner";
import RelatedPost from "../component2/Blog/RelatedPost";
import { useSelector } from "react-redux";
import { domain } from "../domain";

function formatDate(isoDateStr) {
  const date = new Date(isoDateStr);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
const BlogDetail = () => {
  // const blog = JSON.parse(localStorage.getItem("Blogs"));
  const { blogData: blog } = useSelector((state) => state.blogs);

  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get("title");
  // Extract a specific query parameter

  const data = blog?.filter((data) => data.slug === paramValue);
  const singleBlog = data[0];

  return (
    <Layout>
      <Breadcrumb title={singleBlog.blogTitle} />
      <div
        id="content"
        className="swm-main-container swm-site-content swm-anim"
      >
        <div className="swm_site_content_wrap swm-container" />{" "}
        <div className="swm-container swm-layout-sidebar-right swm-post-sidebar-page">
          <div className="swm-column swm-custom-two-third">
            <section>
              <div id="swm-item-entries" className="swm-row">
                <article className="post-entry swm-blog-post post-1309 post type-post status-publish format-standard has-post-thumbnail hentry category-design-trends tag-blogger tag-device tag-internet tag-tech">
                  <div className="swm-column-gap">
                    <div className="">
                      <div className="swm-post-content">
                        <div className="swm-post-image">
                          <div className="swm-post-format">
                            <figure>
                              <img
                                fetchpriority="high"
                                width={939}
                                height={569}
                                src={`https://api.xperiagroup.in${singleBlog.bannerImage.url}`}
                                className="attachment-swm_image_size_post size-swm_image_size_post wp-post-image"
                                alt=""
                                decoding="async"
                                srcSet={`https://api.xperiagroup.in${singleBlog.bannerImage.url} 939w, https://api.xperiagroup.in${singleBlog.bannerImage.url} 300w, https://api.xperiagroup.in${singleBlog.bannerImage.url} 768w`}
                                sizes="(max-width: 939px) 100vw, 939px"
                              />{" "}
                            </figure>
                            <div className="clear" />
                          </div>
                        </div>
                        <div className="swm-post-content-block">
                          <div className="swm-post-title-section">
                            <div className="swm-post-meta  highlight-text">
                              <div className="swm-post-meta-date-separator" />
                              <p>{formatDate(singleBlog.createdAt)}</p>
                              <div className="swm-post-meta-separator" />
                              <p>{singleBlog.category}</p>
                              <div className="swm-post-meta-separator" />
                              <p>0 Comments</p>
                              <div className="swm-post-meta-separator" />
                            </div>
                            <div className="swm-post-title-content">
                              <div className="swm-post-title">
                                <h1 className="swm-color-headings">
                                  {singleBlog.blogTitle}
                                </h1>
                              </div>{" "}
                            </div>
                          </div>
                          <div className="swm-post-list-content-section swm-post-list-single-content-section">
                            <div className="swm-post-single-content">
                              <div
                                data-elementor-type="wp-post"
                                data-elementor-id={1309}
                                className="elementor elementor-1309"
                              >
                                <div
                                  className="elementor-element elementor-element-a6a6708 e-flex e-con-boxed e-con e-parent"
                                  data-id="a6a6708"
                                  data-element_type="container"
                                  data-settings='{"mk_ext_is_sticky":"false"}'
                                >
                                  <div className="e-con-inner">
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: singleBlog.mainContent,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="clear" />
                              <div className="clear" />
                            </div>
                            <div className="clear" />
                          </div>
                          <div className="clear" />
                        </div>{" "}
                        {/* .swm-post-content-block */}
                      </div>{" "}
                      {/* .swm-post-content */}
                      <div className="clear" />{" "}
                    </div>
                  </div>
                  <div className="clear" />
                </article>
              </div>
            </section>

            {/* <RelatedPost
              data={blog.filter(
                (data) => data.category === singleBlog.category
              )}
            /> */}

            <div className="clear" />
          </div>
          <aside
            className="swm-column sidebar swm-anim swm-sticky-sidebar"
            id="sidebar"
          >
            <div className="theiaStickySidebar">
              <div id="block-2" className="widget widget_block widget_search">
                <div className="swm-sidebar-widget-box">
                  <div className="swm-widget-content">
                    <form
                      role="search"
                      method="get"
                      action={`${domain}/blogs`}
                      // action="https://techpartner.online/orbius/"
                      className="wp-block-search__button-outside wp-block-search__text-button wp-block-search"
                    >
                      <label
                        className="wp-block-search__label"
                        htmlFor="wp-block-search__input-1"
                      >
                        Search
                      </label>
                      <div className="wp-block-search__inside-wrapper ">
                        <input
                          className="wp-block-search__input"
                          id="wp-block-search__input-1"
                          placeholder=""
                          defaultValue=""
                          type="search"
                          name="s"
                          required=""
                        />
                        <button
                          aria-label="Search"
                          className="wp-block-search__button wp-element-button"
                          type="submit"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                    <div className="clear" />
                  </div>
                </div>
              </div>
              <div id="categories-1" className="widget widget_categories">
                <div className="swm-sidebar-widget-box">
                  <div className="swm-widget-content">
                    <div className="swm-sidebar-ttl">
                      <h4>
                        <span>Categories</span>
                      </h4>
                      <div className="clear" />
                    </div>
                    <div className="clear" />
                    <ul>
                      <li className="cat-item cat-item-1">
                        <a href={`${domain}/blogs`}>Blog</a>
                      </li>
                      <li className="cat-item cat-item-2">
                        <a href={`${domain}/blogs?category=Creative`}>
                          creativity
                        </a>
                      </li>
                      <li className="cat-item cat-item-3">
                        <a href={`${domain}/blogs?category=Social`}>social</a>
                      </li>
                      <li className="cat-item cat-item-4">
                        <a href={`${domain}/blogs?category=Trending`}>
                          trending
                        </a>
                      </li>
                    </ul>
                    <div className="clear" />
                  </div>
                </div>
              </div>
              <div id="tag_cloud-1" className="widget widget_tag_cloud">
                <div className="swm-sidebar-widget-box">
                  <div className="swm-widget-content">
                    <div className="swm-sidebar-ttl">
                      <h4>
                        <span>tags</span>
                      </h4>
                      <div className="clear" />
                    </div>
                    {/* <div className="clear" />
                    <div className="tagcloud">
                      <a
                        href=""
                        className="tag-cloud-link tag-link-7 tag-link-position-1"
                        style={{ fontSize: "100%" }}
                      >
                        blogger
                      </a>
                      <a
                        href="https://techpartner.online/orbius/tag/device/"
                        className="tag-cloud-link tag-link-8 tag-link-position-2"
                        style={{ fontSize: "100%" }}
                      >
                        device
                      </a>
                      <a
                        href="https://techpartner.online/orbius/tag/digital/"
                        className="tag-cloud-link tag-link-9 tag-link-position-3"
                        style={{ fontSize: "100%" }}
                      >
                        digital
                      </a>
                      <a
                        href="https://techpartner.online/orbius/tag/internet/"
                        className="tag-cloud-link tag-link-10 tag-link-position-4"
                        style={{ fontSize: "100%" }}
                      >
                        internet
                      </a>
                      <a
                        href="https://techpartner.online/orbius/tag/mobile/"
                        className="tag-cloud-link tag-link-11 tag-link-position-5"
                        style={{ fontSize: "100%" }}
                      >
                        mobile
                      </a>
                      <a
                        href="https://techpartner.online/orbius/tag/movie/"
                        className="tag-cloud-link tag-link-12 tag-link-position-6"
                        style={{ fontSize: "100%" }}
                      >
                        movie
                      </a>
                      <a
                        href="https://techpartner.online/orbius/tag/tech/"
                        className="tag-cloud-link tag-link-13 tag-link-position-7"
                        style={{ fontSize: "100%" }}
                      >
                        tech
                      </a>
                      <a
                        href="https://techpartner.online/orbius/tag/web-design/"
                        className="tag-cloud-link tag-link-14 tag-link-position-8"
                        style={{ fontSize: "100%" }}
                      >
                        web design
                      </a>
                    </div> */}
                    <div className="clear" />
                  </div>
                </div>
              </div>{" "}
              <div className="clear" />
            </div>
          </aside>
        </div>
        <div className="clear" />
      </div>
    </Layout>
  );
};

export default BlogDetail;
