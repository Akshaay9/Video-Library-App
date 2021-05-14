import React, { useEffect } from "react";
import { makeAnAPICall } from "../../APICalls";
import { useVideosContext } from "../../Context/VideoLists/VideoContext";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
function CalistheticProductLists() {
  const {
    state: { calisthenicsVideos, calisthenicsLoading },
    videoDIspatch,
  } = useVideosContext();

  useEffect(() => {
    (async () => {
      await makeAnAPICall(
        "GET",
        `https://cryptic-hamlet-94693.herokuapp.com/api/videos/calisthenics`,
        videoDIspatch,
        "LOAD_CALISTHENICS_VIDEO"
      );
    })();
  }, []);
  return (
    <>
      {/* <VideoListCOmponent
        videoData={calisthenicsVideos}
        title={"Calisthenic training"}
      /> */}
    </>
  );
}

export default CalistheticProductLists;
