import React, { useState } from "react";
import bodyBuildingVideo from "./videoplayback (online-video-cutter.com).mp4";
function BodyBuildingScreenBanner() {
  const [videoLoad, setVideoLoad] = useState(false);

  const onVideoLoad = () => {
  
    setVideoLoad(true);
  };
  return (
    <div>
      <div style={{ display: videoLoad ? "none" : "block" }} className="bodynuilding-bg-image"></div>

      <video
        className="bodybuilding-banner-video"
        loop="true"
        autoplay="autoplay"
        muted="true"
        allowfullscreen
        onLoadedData={onVideoLoad}
        style={{ display: videoLoad ? "block" : "none" }}
      >
        <source type="video/mp4" src={bodyBuildingVideo}></source>
      </video>
    </div>
  );
}

export default BodyBuildingScreenBanner;
