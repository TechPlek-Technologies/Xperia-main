import React from 'react'

const Map = () => {
  return (
    <div
  className="elementor-element elementor-element-26f40731 e-con-full e-flex e-con e-parent"
  data-id="26f40731"
  data-element_type="container"
  data-settings='{"mk_ext_is_sticky":"false"}'
  data-core-v316-plus="true"
>
  <div
    className="elementor-element elementor-element-9a7b11c elementor-widget__width-inherit elementor-widget elementor-widget-mk_google_map"
    data-id="9a7b11c"
    data-element_type="widget"
    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
    data-widget_type="mk_google_map.default"
  >
    <div className="elementor-widget-container">
      <div className="mk-google-map-wrap">
        <div
          id="mk-google-map-9a7b11c"
          className="mk-google-map"
          data-map_options='{"zoom":12,"mapTypeId":"roadmap","mapTypeControl":true,"streetViewControl":true,"zoomControl":true,"fullscreenControl":true,"gestureHandling":true}'
          data-cluster="no"
          data-max-width={250}
          data-locations='[[40.72180999999999784222382004372775554656982421875,-73.9955400000000054205884225666522979736328125,false,"Canal Street, New York",null,"","","",""]]'
          data-animate=""
          data-auto-center="center"
          data-predefined-style="silver"
        />
      </div>
    </div>
  </div>
</div>

  )
}

export default Map