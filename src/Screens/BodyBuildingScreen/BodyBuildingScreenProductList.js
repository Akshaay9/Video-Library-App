import React, { useEffect } from "react";
import { useVideosContext } from "../../Context/VideoLists/VideoContext";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
import { makeAnAPICall } from "../../APICalls";
function BodyBuildingScreenProductList() {
  const {
    state: { bodyBuildingVideo, bodyBuildingLoading },
    videoDIspatch,
  } = useVideosContext();

  useEffect(() => {
    (async () => {
      await makeAnAPICall(
        "GET",
        `https://cryptic-hamlet-94693.herokuapp.com/api/videos/bodybuilding`,
        videoDIspatch,
        "LOAD_BODYBUILDING_VIDEO"
      );
    })();
  }, []);

  return (
    <>
      <VideoListCOmponent
        videoData={bodyBuildingVideo}
        title={"Resistance Training"}
      />
    </>
  );
}

export default BodyBuildingScreenProductList;
