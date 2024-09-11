import React from 'react'
import { domain } from '../../domain'

const Breadcrumb = () => {
  return (
    <div
    className="swm_pagetitlebar_custom_section"
    id="swm_pagetitlebar_custom_section"
  >
    <div
      data-elementor-type="wp-post"
      data-elementor-id={1388}
      className="elementor elementor-1388"
    >
      <div
        className="elementor-element elementor-element-69a54fe e-flex e-con-boxed e-con e-parent"
        data-id="69a54fe"
        data-element_type="container"
        data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
        data-core-v316-plus="true"
      >
        <div className="e-con-inner">
          <div
            className="mk_sections_item elementor-element elementor-element-55d61a45 mk-titlebar-align-right elementor-widget__width-inherit elementor-widget elementor-widget-mk_page_titlebar"
            data-id="55d61a45"
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_page_titlebar.default"
          >
            <div className="elementor-widget-container">
              <div className="mk-page-titlebar swm-anim mk-titlebar-title-">
                <div className="mk-page-titlebar-content">
                  <div className="swm-breadcrumbs swm-hide-none">
                    <a
                      href={`${domain}`}
                      title="Orbius - Creative Agency and Portfolio Theme"
                      rel="home"
                      className="swm-bc-trail-begin"
                    >
                      Home
                    </a>
                    <span className="swm-bc-sep" />
                    <span className="swm-bc-trail-end">Awards list</span>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Breadcrumb