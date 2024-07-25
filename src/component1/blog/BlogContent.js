import React from 'react'
import { BlogData } from '../../data/home/Data';
import { domain } from '../../domain';

const {BlogInnerData} = BlogData;

const BlogContent = () => {
  return (
    <>
      {BlogInnerData.map((blog, index) => (
                  <article
                    className="mk-grid-item mk-grid-item-wrap mk-item--full"
                    key={index}
                  >
                    <div className="mk-post-wrap">
                      <div className="mk-post-content">
                        <div className="mk-post-meta highlight-text">
                          <div className="mk-post-meta-date-separator" />
                          <a href="#" className="entry-date published updated">
                            {blog.date}
                          </a>
                          <div className="mk-post-meta-separator" />
                          <a href="#" rel="tag">
                            {blog.category}
                          </a>
                          <div className="mk-post-meta-separator" />
                        </div>
                        <h3 className="mk_post_title">
                          <a href={blog.slug ? `${domain}${blog.slug}` : "#"}>
                            {blog.name}
                          </a>
                        </h3>
                        <div className="mk-post-image">
                          <a
                            href={blog.slug ? `${domain}/${blog.slug}` : "#"}
                            className="mk-post-grid-image swm-anim"
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              width={939}
                              height={569}
                              src={blog.icon.path}
                              className="attachment-full size-full"
                              alt={blog.name.toLowerCase()}
                              srcSet={`${
                                blog.icon.path
                              } 939w, ${blog.icon.path.replace(
                                ".webp",
                                "-300x182.webp"
                              )} 300w, ${blog.icon.path.replace(
                                ".webp",
                                "-768x465.webp"
                              )} 768w`}
                              sizes="(max-width: 939px) 100vw, 939px"
                            />
                          </a>
                        </div>
                        <div className="mk_post_excerpt">
                          {blog.shortDescription}
                        </div>
                        <div className="mk-post-button">
                          <a href={blog.slug ? `${domain}/${blog.slug}` : "#"}>
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
    </>
  )
}

export default BlogContent
