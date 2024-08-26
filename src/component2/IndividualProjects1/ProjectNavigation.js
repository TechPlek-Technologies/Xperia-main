import React from 'react'
import { domain } from '../../domain'

const ProjectNavigation = () => {
  return (
    <div
    className="elementor-element elementor-element-1233b9c8 animated-fast e-flex e-con-boxed e-con e-parent"
    data-id="1233b9c8"
    data-element_type="container"
    data-settings='{"animation":"none","mk_ext_is_sticky":"false"}'
  >
    <div className="e-con-inner">
      <div
        className="elementor-element elementor-element-6e09cdd0 elementor-widget elementor-widget-mk_post_single_pagination"
        data-id="6e09cdd0"
        data-element_type="widget"
        data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
        data-widget_type="mk_post_single_pagination.default"
      >
        <div className="elementor-widget-container">
          <div className="mk-post-single-pagination">
            <div className="mk-ps-pagination-prev mk-ps-pagination-np swm-hide-none">
              <a href="https://techpartner.online/orbius/portfolio-item/aqua-vista-2/">
                <span>prev project</span>
              </a>
            </div>
            <div className="mk-ps-pagination-thumbnails swm-hide-none">
              <a href={`${domain}/projects`}>
                <span />
                <span />
              </a>
            </div>
            <div className="mk-ps-pagination-next mk-ps-pagination-np swm-hide-none">
              <a href="https://techpartner.online/orbius/portfolio-item/doux-plaisir-2/">
                <span>next project</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectNavigation