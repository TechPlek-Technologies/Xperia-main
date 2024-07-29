import React from "react";
import { domain } from "../../domain";
import SectionHeading from "../common/section-heading";

const Team = () => {
  const teamItems = [
    {
      id: 1322,
      category: "photography",
      href: domain,
      title: "Saibal Gupta",
      subtitle: "ceo & co-founder",
      imgSrc:
        `${domain}/assets/img/team/750x820/SaibalGupta.webp`,
      imgSrcSet:
        `${domain}/assets/img/team/750x820/SaibalGupta.webp 750w, ${domain}/assets/img/team/274x300/SaibalGupta.webp 274w`,
      imgAlt: "Saibal Gupta",
      imgWidth: 750,
      imgHeight: 820,
      description:"passionate advertising marketing professional , working with media, ooh/dooh - experiential advertising."
    },
    {
      id: 1323,
      category: "design",
      href: domain,
      title: "Madhav Joshi",
      subtitle: "Co-Founder",
      imgSrc:
      `${domain}/assets/img/team/750x820/MadhavJoshi.webp`,
    imgSrcSet:
      `${domain}/assets/img/team/750x820/MadhavJoshi.webp 750w, ${domain}/assets/img/team/274x300/MadhavJoshi.webp 274w`,
      imgAlt: "Madhav Joshi",
      imgWidth: 750,
      imgHeight: 820,
      description:"OOH & Experiential Marketing Expert | Digital Marketing Specialist."
    },
    {
      id: 1324,
      category: "photography",
      href: domain,
      title: "Amit Roy",
      subtitle: "Co-Founder (Pencil Box) / Creative Head",
      imgSrc:
      `${domain}/assets/img/team/750x820/AmitRoy.webp`,
    imgSrcSet:
      `${domain}/assets/img/team/750x820/AmitRoy.webp 750w, ${domain}/assets/img/team/274x300/AmitRoy.webp 274w`,
      imgAlt: "Amit Roy",
      imgWidth: 750,
      imgHeight: 820,
      description:"Storyteller, Creative director, communication strategist, experiential marketing. An experience of 25+ years."
    },
  ];
  return (
    <>
    <SectionHeading title={"team"} subTitle={"brains behind the screen"} />
     <div
      className="elementor-element elementor-element-702a86e3 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 join-items-no mk-portfolio-image-zoom-no mk-portfolio-c-width-fullwidth mk-pf-excerpt-category elementor-widget elementor-widget-mk_portfolio_modern"
      data-id="702a86e3"
      data-element_type="widget"
      data-settings='{"content_position":"hover-over","columns":"3","columns_tablet":"2","columns_mobile":"1","mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
      data-widget_type="mk_portfolio_modern.default"
      style={{maxWidth:"1400px", margin:"100px auto"}}
    >
      <div className="elementor-widget-container">
        <div
          className="mk-p-grid mk-portfolio-modern mk-pagination--on mk-pagination-type--load-more"
          data-options='{"post_type":"portfolio","next_page":"2","max_pages_num":2,"hover_cursor_on":"no","portfolio_type":"modern","masonry_on":"no","enable_filter":"no","pagination_type":"load-more","loadmore_button_text":"Load more","title_tag":"h3","title_length":"100","show_subtitle":"yes","subtitle_type":"category","post_img_size":"full","taxonomy_filter":"portfolio_category","orderby":"date","order":"DESC","posts_per_page":9,"additional_params":"category","include_posts_cat":["16","18","19"],"content_position":"hover-over"}'
        >
          {/* filter */}
          {/* content */}
          {teamItems.map((item) => (
            <article
              key={item.id}
              className={`mk-grid-item mk-grid-item-wrap mk-item--full post-${item.id} portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio_category-${item.category}`}
              style={{
                paddingRight: "calc(40px / 2)",
                paddingLeft: "calc(40px / 2)",
                marginBottom: "40px",
              }}
            >
              <div className="mk-portfolio-wrap content-position--hover-over">
                <div className="mk-portfolio-image">
                  <a
                    href={item.href}
                    className="mk-portfolio-modern-overlay"
                  ></a>
                  <div className="mk-portfolio-content">
                    <div className="mk-portfolio-content-holder">
                      <div className="mk-portfolio-title-subtitle">
                        <h3 className="mk-portfolio-title">
                          <a href={item.href} target="_self">
                            {item.title}
                          </a>
                        </h3>
                        <div className="mk-portfolio-subtitle">
                          {item.subtitle}
                        </div>
                       <div  className="mk-portfolio-title" style={{fontFamily:"Roboto Mono !important", fontSize:'15px', fontWeight:400, letterSpacing:'0em', fontStyle:'normal !important',}}>
                       {item.description}
                       </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href={item.href}
                    className="mk-post-grid-image swm-anim"
                    target="_self"
                  >
                    <img
                      fetchpriority="high"
                      decoding="async"
                      width={item.imgWidth}
                      height={item.imgHeight}
                      src={item.imgSrc}
                      className="attachment-full size-full"
                      alt={item.imgAlt}
                      srcSet={item.imgSrcSet}
                      sizes={`(max-width: ${item.imgWidth}px) 100vw, ${item.imgWidth}px`}
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
          <div className="clear" />
          <div className="mk-m-pagination mk--load-more">
            <div className="mk-m-pagination-inner">
              <a
                className="mk-load-more-button button submit mk-layout--filled  mk-html--link"
                href="#"
                target="_self"
              >
                Load more
              </a>
            </div>
          </div>
          <p className="mk-pagination-spinner spinner mk-m-pagination-spinner swm-color-headings">
            <i className="fas fa-spinner" />
          </p>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Team;
