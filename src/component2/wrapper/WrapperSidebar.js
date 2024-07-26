import React from 'react'
import MediaLinks from './MediaLinks'

const WrapperSidebar = () => {
  return (
    <div
            className="elementor-element elementor-element-5455a342 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent"
            data-id="5455a342"
            data-element_type="container"
            data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
            data-core-v316-plus="true"
          >
            <div className="e-con-inner">
              <div
                className="mk_sections_item elementor-element elementor-element-7ac392e elementor-widget elementor-widget-image"
                data-id="7ac392e"
                data-element_type="widget"
                data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <a href="/">
                    <img
                      width={229}
                      height={61}
                      src="/assets/logo.webp"
                      className="attachment-full size-full wp-image-1047"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div
                className="mk_sections_item elementor-element elementor-element-39d5c41f mk-title-align--left elementor-widget elementor-widget-mk_title"
                data-id="39d5c41f"
                data-element_type="widget"
                data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                data-widget_type="mk_title.default"
              >
                <div className="elementor-widget-container">
                  <div className="mk-title mk-title-">
                    <div className="mk-title-desc swm-hide-none">
                      <span>
                        Curabitur sagittis lectus quis purus interua vulputate
                        justo hererit asellus ullcorper sem vel tellus ultrices ac
                        suscipit orcisdsadfas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mk_sections_item elementor-element elementor-element-cf6193d elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="cf6193d"
                data-element_type="widget"
                data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                data-widget_type="icon-list.default"
              >
                <MediaLinks/>
              </div>
              <div
                className="mk_sections_item elementor-element elementor-element-5e0ec20c elementor-widget elementor-widget-image"
                data-id="5e0ec20c"
                data-element_type="widget"
                data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    width={319}
                    height={217}
                    src="/assets/logo.webp"
                    className="attachment-large size-large wp-image-1206"
                    alt=""
                    srcSet="/assets/footer_logo.webp 319w, /assets/footer_logo.webp 300w"
                    sizes="(max-width: 319px) 100vw, 319px"
                  />
                </div>
              </div>
              <div
                className="mk_sections_item elementor-element elementor-element-276d74f6 mk-title-align--left elementor-widget elementor-widget-mk_title"
                data-id="276d74f6"
                data-element_type="widget"
                data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                data-widget_type="mk_title.default"
              >
                <div className="elementor-widget-container">
                  <div className="mk-title mk-title-">
                    <div className="mk-title-subtitle swm-hide-none">
                     India
                    </div>
                    <div className="mk-title-desc swm-hide-none">
                      <span>
                      F-73, 3rd Floor,Okhla Industrial Area Ph 3,New Delhi, 110020
                        <br />
                        +91 813 083 8855
                        <br />
                        SaibalGupta@xperiagroup.in
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default WrapperSidebar