import React from "react";

const TeamSection = ({ data }) => {
  const splitArray = (data) => {
    if (!data) return { matchedArray: [], otherArray: [] };
    // Normalize function to remove extra spaces and make the name case-insensitive
    const normalizeName = (name) => name.trim().toLowerCase();

    // Desired names normalized
    const desiredNames = ["Madhav Joshi", "Saibal Gupta"].map(normalizeName);

    // Split the array into two arrays
    const [matchedArray, otherArray] = data.reduce(
      (acc, item) => {
        const normalizedItemName = normalizeName(item.name);

        // Check if the name matches either 'Madhav Joshi' or 'Saibal Gupta'
        if (desiredNames.includes(normalizedItemName)) {
          acc[0].push(item); // First array for matched names
        } else {
          acc[1].push(item); // Second array for the rest
        }

        return acc;
      },
      [[], []] // Initialize two empty arrays for matched and other objects
    );

    return { matchedArray, otherArray };
  };

  const { matchedArray, otherArray } = splitArray(data);

  console.log("TeamSection", data);
  return (
    <div
      className="elementor-element elementor-element-44a8fb1c e-flex e-con-boxed e-con e-parent"
      style={{ paddingTop: "80px" }}
    >
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-702a86e3 elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 join-items-no mk-portfolio-image-zoom-no mk-portfolio-c-width-fullwidth mk-pf-excerpt-category elementor-widget elementor-widget-mk_portfolio_modern">
          <div className="elementor-widget-container">
            <div className="mk-p-grid mk-portfolio-modern">
              <div
                className="mk-grid-inner clear"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {matchedArray &&
                  matchedArray.map((item) => (
                    <article
                      key={item.id}
                      className={`mk-grid-item mk-grid-item-wrap mk-item--full post-${item.id} portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio_category-photography`}
                      style={{
                        paddingRight: "calc(40px / 2)",
                        paddingLeft: "calc(40px / 2)",
                        marginBottom: "40px",
                      }}
                    >
                      <div className="mk-team-position">{item.designation}</div>

                      <div className="mk-portfolio-wrap content-position--hover-over">
                        <div className="mk-portfolio-image">
                          <a className="mk-portfolio-modern-overlay"></a>
                          <div className="mk-portfolio-content">
                            <div
                              className="mk-portfolio-content-holder"
                              style={{ minHeight: "100px" }}
                            >
                              <div className="mk-portfolio-title-subtitle ">
                                {/* <h3 className="mk-portfolio-title">
                                  <a href={"#"} target="_self">
                                    {item.name}
                                  </a>
                                </h3> */}
                                {/* <div className="mk-portfolio-subtitle remove_dot">
                                  &mdash;{"  "}
                                  {item.designation}
                                </div> */}
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
                              src={`https://api.xperiagroup.in${item?.profileImage.url}`}
                              className="attachment-full size-full"
                              alt={item?.profileImage.name}
                              srcSet={`https://api.xperiagroup.in${item?.profileImage.url} 750w, https://api.xperiagroup.in${item?.profileImage.url} 274w`}
                              sizes={`(max-width: 750px) 100vw, 820px`}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="mk-team-content swm-anim">
                        <div className="mk-team-name">
                          <h6 className="mk-team-name-tag">
                            <a className="mk-team-link">{item.name}</a>
                          </h6>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
              <div className="mk-grid-inner clear">
                {otherArray &&
                  otherArray.map((item) => (
                    <article
                      key={item.id}
                      className={`mk-grid-item mk-grid-item-wrap mk-item--full post-${item.id} portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio_category-photography`}
                      style={{
                        paddingRight: "calc(40px / 2)",
                        paddingLeft: "calc(40px / 2)",
                        marginBottom: "40px",
                      }}
                    >
                      <div className="mk-team-position">{item.designation}</div>

                      <div className="mk-portfolio-wrap content-position--hover-over">
                        <div className="mk-portfolio-image">
                          <a className="mk-portfolio-modern-overlay"></a>
                          <div className="mk-portfolio-content">
                            <div
                              className="mk-portfolio-content-holder"
                              style={{ minHeight: "100px" }}
                            >
                              <div className="mk-portfolio-title-subtitle ">
                                {/* <h3 className="mk-portfolio-title">
                                <a href={"#"} target="_self">
                                  {item.name}
                                </a>
                              </h3> */}
                                {/* <div className="mk-portfolio-subtitle remove_dot">
                                &mdash;{"  "}
                                {item.designation}
                              </div> */}
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
                              src={`https://api.xperiagroup.in${item?.profileImage.url}`}
                              className="attachment-full size-full"
                              alt={item?.profileImage.name}
                              srcSet={`https://api.xperiagroup.in${item?.profileImage.url} 750w, https://api.xperiagroup.in${item?.profileImage.url} 274w`}
                              sizes={`(max-width: 750px) 100vw, 820px`}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="mk-team-content swm-anim">
                        <div className="mk-team-name">
                          <h6 className="mk-team-name-tag">
                            <a className="mk-team-link">{item.name}</a>
                          </h6>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
              <div className="clear" />
              {/* Pagination or load more button */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
