import React from "react";
import bodyBuildingVideo from "./videoplayback (online-video-cutter.com).mp4";
function BodyBuildingScreenBanner() {
  return (
    <div>
      <video className="bodybuilding-banner-video" loop="true" autoplay="autoplay" muted="true" allowfullscreen>

      <source type="video/mp4" src={bodyBuildingVideo}></source>
      </video>
    </div>
  );
}

export default BodyBuildingScreenBanner;
