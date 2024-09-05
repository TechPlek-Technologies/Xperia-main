import React from "react";
import { BlogData } from "../../data/home/Data";
import { domain } from "../../domain";
import { useSelector } from "react-redux";

const { BlogInnerData } = BlogData;

const BlogContent = () => {
  // const blogs = localStorage.getItem("Blogs"));
  const { blogData: blogs } = useSelector((state) => state.blogs);
  console.log(blogs);

  function formatDate(isoDateStr) {
    const date = new Date(isoDateStr);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <>
      {blogs &&
        blogs.map((blog, index) => (
          <article
            className="mk-grid-item mk-grid-item-wrap mk-item--full"
            key={index}
          >
            <div className="mk-post-wrap">
              <div className="mk-post-content">
                <div className="mk-post-meta highlight-text">
                  <div className="mk-post-meta-date-separator" />
                  <a href="#" className="entry-date published updated">
                    {formatDate(blog.createdAt)}
                  </a>
                  <div className="mk-post-meta-separator" />
                  <a href="#" rel="tag">
                    {blog.category}
                  </a>
                  <div className="mk-post-meta-separator" />
                </div>
                <h3 className="mk_post_title">
                  <a href={`${domain}/blog?title=${blog.slug}`}>
                    {blog.blogTitle}
                  </a>
                </h3>
                <div className="mk-post-image">
                  <a
                    href={`${domain}/blog?title=${blog.slug}`}
                    className="mk-post-grid-image swm-anim"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      width={939}
                      height={569}
                      src={`https://api.xperiagroup.in/${
                        blog.bannerImage.url
                      }`}
                      className="attachment-full size-full"
                      alt="blog icon"
                      srcSet={`${`https://api.xperiagroup.in/${
                        blog.bannerImage.url
                      }`} 939w, ${`https://api.xperiagroup.in/${
                        blog.bannerImage.url
                      }`} 300w, ${`https://api.xperiagroup.in/${
                        blog.bannerImage.url
                      }`} 768w`}
                      sizes="(max-width: 939px) 100vw, 939px"
                    />
                  </a>
                </div>
                <div className="mk_post_excerpt">{blog.description}</div>
                <div className="mk-post-button">
                  <a href={`${domain}/blog?title=${blog.slug}`}>
                    <span className="mk-post-button-arrow-start" />
                    <span className="mk-post-button-text">read more</span>
                    <span className="mk-post-button-arrow-end" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
    </>
  );
};

export default BlogContent;
