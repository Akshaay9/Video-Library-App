import React, { useEffect } from "react";
import { makeAnAPICall } from "../../APICalls";
import { useVideosContext } from "../../Context/VideoLists/VideoContext";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
function ZoombaProductList() {
  const {
    state: { zumbaVideos, zumbaLoading },
    videoDIspatch,
  } = useVideosContext();

  useEffect(() => {
    (async () => {
      await makeAnAPICall(
        "GET",
        `https://cryptic-hamlet-94693.herokuapp.com/api/videos/zumba`,
        videoDIspatch,
        "LOAD_ZUMBA_VIDEO"
      );
    })();
  }, []);

  return (
    <>
      <VideoListCOmponent videoData={zumbaVideos} title={"zumba Workout"} />
    </>
  );
}

export default ZoombaProductList;
