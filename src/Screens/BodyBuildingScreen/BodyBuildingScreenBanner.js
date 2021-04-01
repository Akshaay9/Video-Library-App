import React from "react";
import bodyBuildingVideo from "./videoplayback (online-video-cutter.com).mp4";
function BodyBuildingScreenBanner() {
  return (
    <div>
      <video className="bodybuilding-banner-video" src={bodyBuildingVideo} autoPlay muted loop></video>
    </div>
  );
}

export default BodyBuildingScreenBanner;
