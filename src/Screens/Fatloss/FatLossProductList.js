import React, { useEffect, useState } from "react";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
import { useVideosContext } from "../../Context/VideoLists/VideoContext";
import { makeAnAPICall } from "../../APICalls";
import YouTube from "react-youtube";
import YoutubeMagic from "../../SkeletonLoader/VideoListSkeletonLoader/DesktopSkeletonLoader";
import MobileYoutubeMagic from "../../SkeletonLoader/VideoListSkeletonLoader/MobileSkeletonLoader";
function FatLossProductList() {
  const [videoURl, setVideoURL] = useState("");
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

  const opts = {
    height: "580vh",
    width: "100%",
  };

  return (
    <>
      {fatlossLoading ? (
        <>
          <div className="desktop-skeleton-loader">{<YoutubeMagic />}</div>
          <div className="mobile-skeleton-loader">{<MobileYoutubeMagic />}</div>
        </>
      ) : (
        <>
          <h2 className="intro">Fat Loss</h2>
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
            {fatlossVideo.map((ele) => (
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

export default FatLossProductList;
