import React, { useEffect, useState } from "react";
import { useVideosContext } from "../../Context/VideoLists/VideoContext";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
import YouTube from "react-youtube";
import { makeAnAPICall } from "../../APICalls";

function BodyBuildingScreenProductList() {
  const [videoURl, setVideoURL] = useState("");
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

  const opts = {
    height: "580vh",
    width: "100%",
  };

  return (
    <>
      <h2 className="intro">Resistance Training</h2>
      {videoURl !== "" && (
        <div className="test">
          <i
            className="far fa-times-circle"
            onClick={() => setVideoURL("")}
          ></i>
          <YouTube videoId={videoURl} opts={opts} className="BG-video-player" />
        </div>
      )}
      {/* <VideoListCOmponent
        videoData={bodyBuildingVideo}
        title={"Resistance Training"}
      /> */}
      <div className="bodyBuilding-Beginner-container">
        {bodyBuildingVideo.map((ele) => (
          <>
            <VideoListCOmponent ele={ele}
              setVideoURL={setVideoURL}/>
          </>
        ))}
      </div>
    </>
  );
}

export default BodyBuildingScreenProductList;
