import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { makeAnAPICall } from "../../APICalls";
import { useVideosContext } from "../../Context/VideoLists/VideoContext";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
import YoutubeMagic from "../../SkeletonLoader/VideoListSkeletonLoader/DesktopSkeletonLoader";
import MobileYoutubeMagic from "../../SkeletonLoader/VideoListSkeletonLoader/MobileSkeletonLoader";
import {BE_URL} from "../../const"

function CalistheticProductLists() {
  const [videoURl, setVideoURL] = useState("");
  const {
    state: { calisthenicsVideos, calisthenicsLoading },
    videoDIspatch,
  } = useVideosContext();

  useEffect(() => {
    (async () => {
      await makeAnAPICall(
        "GET",
        `${BE_URL}/api/videos/calisthenics`,
        videoDIspatch,
        "LOAD_CALISTHENICS_VIDEO"
      );
    })();
  }, []);
  const opts = {
    height: "580vh",
    width: "100%",
  };
  return (
    <>
      {calisthenicsLoading ? (
        <>
          <div className="desktop-skeleton-loader">{<YoutubeMagic />}</div>
          <div className="mobile-skeleton-loader">{<MobileYoutubeMagic />}</div>
        </>
      ) : (
        <>
          <h2 className="intro">Calisthenic Training</h2>
          {videoURl !== "" && (
            <div className="test">
              <i
                className="far fa-times-circle"
                onClick={() => setVideoURL("")}
              ></i>
              <YouTube
                videoId={videoURl}
                opts={opts}
                className="BG-video-player"
              />
            </div>
          )}
          <div className="bodyBuilding-Beginner-container">
            {calisthenicsVideos.map((ele) => (
              <>
                <VideoListCOmponent ele={ele} setVideoURL={setVideoURL} />
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
}
export default CalistheticProductLists;
