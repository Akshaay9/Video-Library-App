import React, { useState } from "react";
import bodyBuildingVideo from "./videoplayback (online-video-cutter.com).mp4";
function BodyBuildingScreenBanner() {
  const [videoLoad, setVideoLoad] = useState(false);

  // const onVideoLoad = () => {
  //   setVideoLoad(true);
  //   console.log("hey");
  // };
  return (
    <div>
      <div
        className="bodybuilding-banner bg-image"
      ></div>
    </div>
  );
}

export default BodyBuildingScreenBanner;
