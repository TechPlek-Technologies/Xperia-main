import React from "react";

const Slider = ({ data }) => {
  const carouselImages = data.carouselImages[0];
  console.log(carouselImages);


  return (
    <>
      { (
        <div
          className="elementor-element elementor-element-b89713c e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="b89713c"
          data-element_type="container"
          data-settings='{"mk_ext_is_sticky":"false"}'
        >
          <div
            className="elementor-element elementor-element-2a8edf28 e-con-full e-flex e-con e-child"
            data-id="2a8edf28"
            data-element_type="container"
            data-settings={`{"background_background":"video","background_video_link":"${process.env.REACT_APP_API_URL}/${carouselImages.url}","background_play_on_mobile":"yes","mk_ext_is_sticky":"false"}`}
          >
            <div className="elementor-background-video-container">
              <video
                className="elementor-background-video-hosted elementor-html5-video"
                autoPlay
                muted
                playsInline
                loop
                src={`${process.env.REACT_APP_API_URL}/${carouselImages.url}`}
                style={{ width: "1422.22px", height: 800 }}
                poster={`${process.env.REACT_APP_API_URL}/${carouselImages.url}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
