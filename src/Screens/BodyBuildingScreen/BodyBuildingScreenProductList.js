import React from "react";
import { beginnerBodyBuilding } from "../../Data/BeginnerBodyBuildingData";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
function BodyBuildingScreenProductList() {
  return (
    <>
      <VideoListCOmponent
        videoData={beginnerBodyBuilding}
        title={"Resistance Training"}
      />
    </>
  );
}

export default BodyBuildingScreenProductList;
