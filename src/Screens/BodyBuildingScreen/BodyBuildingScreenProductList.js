import React, { useEffect } from "react";
import { useVideosContext } from "../../Context/VideoLists/VideoContext";
import { beginnerBodyBuilding } from "../../Data/BeginnerBodyBuildingData";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
import { makeAnAPICall } from "../../APICalls";
function BodyBuildingScreenProductList() {
  const {
    state: { bodyBuildingVideo, bodyBuildingLoading },
    videoDIspatch,
  } = useVideosContext();

  // useEffect(() => {
  //   (async () => {
  //     const data = await makeAnAPICall(
  //       "GET",
  //       `https://cryptic-hamlet-94693.herokuapp.com/api/videos/bodybuilding`,

  //     );
  //     console.log(data.data);
  //   })();
  // });

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
