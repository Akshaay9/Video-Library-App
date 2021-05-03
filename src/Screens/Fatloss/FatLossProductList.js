import React from "react";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
import { fatLossVideo } from "../../Data/FatlossData";
function FatLossProductList() {
  return (
    <>
      <VideoListCOmponent videoData={fatLossVideo} title={"Loose Fat"} />
    </>
  );
}

export default FatLossProductList;
