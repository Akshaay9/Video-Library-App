import React from "react";
import { zumbaVideos } from "../../Data/ZoombaData";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
function ZoombaProductList() {
  return (
    <>
      <VideoListCOmponent videoData={zumbaVideos} title={"zumba Workout"} />
    </>
  );
}

export default ZoombaProductList;
