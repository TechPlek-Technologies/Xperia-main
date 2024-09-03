import React, { useEffect } from "react";
import SectionHeading from "../common/section-heading";
import Button from "../../component/home/about/about/Button";
import axios from "axios";

const Team = () => {

  const [data, setData] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.xperiagroup.in/teams/all-teams`
      );
      if (response.status === 200) {
        setData(response.data);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <SectionHeading title={"team"} subTitle={"brains behind the screen"} />
      <div
        className="elementor-element elementor-element-702a86e3 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 join-items-no mk-portfolio-image-zoom-no mk-portfolio-c-width-fullwidth mk-pf-excerpt-category elementor-widget elementor-widget-mk_portfolio_modern"
        data-id="702a86e3"
        data-element_type="widget"
        data-settings='{"content_position":"hover-over","columns":"3","columns_tablet":"2","columns_mobile":"1","mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
        data-widget_type="mk_portfolio_modern.default"
        style={{ maxWidth: "1400px", margin: "100px auto" }}
      >
        <div className="elementor-widget-container">
          <div
            className="mk-p-grid mk-portfolio-modern mk-pagination--on mk-pagination-type--load-more"
            data-options='{"post_type":"portfolio","next_page":"2","max_pages_num":2,"hover_cursor_on":"no","portfolio_type":"modern","masonry_on":"no","enable_filter":"no","pagination_type":"load-more","loadmore_button_text":"Load more","title_tag":"h3","title_length":"100","show_subtitle":"yes","subtitle_type":"category","post_img_size":"full","taxonomy_filter":"portfolio_category","orderby":"date","order":"DESC","posts_per_page":9,"additional_params":"category","include_posts_cat":["16","18","19"],"content_position":"hover-over"}'
          >
            {/* filter */}
            {/* content */}
            {data &&
              data.map((item) => (
                <article
                  key={item.id}
                  className={`mk-grid-item mk-grid-item-wrap mk-item--full post-${item.id} portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio_category-photography`}
                  style={{
                    paddingRight: "calc(40px / 2)",
                    paddingLeft: "calc(40px / 2)",
                    marginBottom: "40px",
                  }}
                >
                  <div className="mk-portfolio-wrap content-position--hover-over">
                    <div className="mk-portfolio-image">
                      <a href={"#"} className="mk-portfolio-modern-overlay"></a>
                      <div className="mk-portfolio-content">
                        <div className="mk-portfolio-content-holder">
                          <div className="mk-portfolio-title-subtitle">
                            <h3 className="mk-portfolio-title">
                              <a href={"#"} target="_self">
                                {item.name}
                              </a>
                            </h3>
                            <div className="mk-portfolio-subtitle">
                              {item.designation}
                            </div>
                            <div
                              className="mk-portfolio-title"
                              style={{
                                fontFamily: "Roboto Mono !important",
                                fontSize: "15px",
                                fontWeight: 400,
                                letterSpacing: "0em",
                                fontStyle: "normal !important",
                              }}
                            >
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href={"#"}
                        className="mk-post-grid-image swm-anim"
                        target="_self"
                      >
                        <img
                          fetchpriority="high"
                          decoding="async"
                          width={750}
                          height={820}
                          src={`https://api.xperiagroup.in${JSON.parse(item?.profileImage)?.url}`}
                          className="attachment-full size-full"
                          alt={JSON.parse(item?.profileImage)?.name}
                          srcSet={`https://api.xperiagroup.in${JSON.parse(item?.profileImage)?.url} 750w, https://api.xperiagroup.in${JSON.parse(item?.profileImage)?.url} 274w`}
                          sizes={`(max-width: 750px) 100vw, 820px`}
                        />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            <div className="clear" />
            <Button text={"view all"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
