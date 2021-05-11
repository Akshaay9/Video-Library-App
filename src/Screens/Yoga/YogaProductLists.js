import React, { useEffect } from "react";
import { makeAnAPICall } from "../../APICalls";
import { useVideosContext } from "../../Context/VideoLists/VideoContext";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
function YogaProductLists() {
  const {
    state: { yogaVideo, yogaLoading },
    videoDIspatch,
  } = useVideosContext();

  useEffect(() => {
    (async () => {
      await makeAnAPICall(
        "GET",
        `https://cryptic-hamlet-94693.herokuapp.com/api/videos/yoga`,
        videoDIspatch,
        "LOAD_YOGA_VIDEO"
      );
    })();
  }, []);
  return (
    <>
      <VideoListCOmponent videoData={yogaVideo} title={"Yoga"} />
    </>
  );
}

export default YogaProductLists;
