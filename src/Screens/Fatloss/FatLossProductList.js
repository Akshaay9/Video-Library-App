import React, { useEffect } from "react";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
import { useVideosContext } from "../../Context/VideoLists/VideoContext";
import { makeAnAPICall } from "../../APICalls";
function FatLossProductList() {

  const {
    state: { fatlossVideo, fatlossLoading },
    videoDIspatch,
  } = useVideosContext();

  useEffect(() => {
    (async () => {
      await makeAnAPICall(
        "GET",
        `https://cryptic-hamlet-94693.herokuapp.com/api/videos/fatloss`,
        videoDIspatch,
        "LOAD_FATLOSS_VIDEO"
      );
    })();
  }, []);
  
  return (
    <>
      {/* <VideoListCOmponent videoData={fatlossVideo} title={"Loose Fat"} /> */}
    </>
  );
}

export default FatLossProductList;
