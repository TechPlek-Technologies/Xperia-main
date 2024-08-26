import React from "react";

const RelatedPost = ({ data }) => {
  function formatDate(isoDateStr) {
    const date = new Date(isoDateStr);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <div className="swm-related-posts-section">
      <div className="swm-related-posts-wrap swm-content-wrap swm-single-related-posts-3">
        <div className="swm-related-posts swm_content_border">
          <h3 className="swm-single-pg-titles swm-single-pg-titles swm-color-headings">
            <span>Related Posts</span>
          </h3>
          <ul>
            {data.map((post, index) => {
              const iconImage = JSON.parse(post.iconImage);

              return (
                <li key={post.id}>
                  <div
                    className="swm_related_post_img"
                    data-anim-type="fade-in"
                    data-anim-delay={200}
                  >
                    <a href={`https://techpartner.online/orbius/${post.slug}`}>
                      <img
                        width={939}
                        height={569}
                        src={`${process.env.REACT_APP_API_URL}/${iconImage.url}`}
                        className="attachment-medium-large size-medium-large wp-post-image"
                        alt={post.blogTitle}
                        decoding="async"
                        sizes="(max-width: 939px) 100vw, 939px"
                      />
                    </a>
                  </div>
                  <div className="swm-related-post-text">
                    <div className="swm-tiny-post-meta highlight-text">
                      <div className="swm-tiny-post-meta-date-separator" />
                      {post.category && (
                        <>
                          <a
                            href={`https://techpartner.online/orbius/category/${post.category}/`}
                            rel="tag"
                          >
                            {post.category}
                          </a>
                          <div className="swm-tiny-post-meta-separator" />
                        </>
                      )}
                      <a
                        itemProp="dateCreated"
                        href="#"
                        className="entry-date published updated"
                      >
                        {formatDate(post.createdAt)}
                      </a>
                      <div className="swm-tiny-post-meta-separator" />
                    </div>
                    <div className="swm-related-link swm-color-headings">
                      <a
                        href={`https://techpartner.online/orbius/${post.slug}`}
                      >
                        {post.blogTitle}
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="clear" />
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
