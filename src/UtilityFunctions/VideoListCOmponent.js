import React, { useState } from "react";
import YouTube from "react-youtube";
import { NavLink, useLocation } from "react-router-dom";
import { UsePlayListContext } from "../Context/PlaylistContext/PlayListContext";
import { useWatchLaterContext } from "../Context/WatchLaterVideoContext/WatchLaterVideoContext";
import { useLikedVideoContext } from "../Context/LikedVideoContext/LikedVideoContext";
import { showModalForVideoPlayListActions } from "./VideoListFunctions";
import {
  addOrRemoveVideoFromLikedVideo,
  addOrRemoveVideoFromWatchLater,
} from "./playListsWatchLaterAndLikesCTAFunctions";
function VideoListCOmponent({ videoData, title }) {
  
  let location = useLocation();
  const {
    state: { playLists, loading },
    playListDispatch,
  } = UsePlayListContext();

  const {
    state: { watchLaterVideo },
    watchLaterDispatch,
  } = useWatchLaterContext();
  const {
    state: { likedVideo },
    likedVideoDispatch,
  } = useLikedVideoContext();

  // modal useState
  const [modal, showModal] = useState(false);
  // cretae playlist modal useState
  const [createPlaylistBTN, setCreatePlaylistBTN] = useState(false);
  // useState to store id , so that it can  be used to call the funtion
  const [videoid, setVideoid] = useState(null);
  // playlist input
  const [inputPlayList, setInputPlayList] = useState("");
  // video description
  const [videoURl, setVideoURL] = useState("");
  // video description
  const opts = {
    height: "580vh",
    width: "100%",
  };

  return (
    <div>
      {videoURl !== "" && (
        <div className="test">
          <i
            className="far fa-times-circle"
            onClick={() => setVideoURL("")}
          ></i>
          <YouTube videoId={videoURl} opts={opts} className="BG-video-player" />
        </div>
      )}
      <div>
        <h2 className="intro">{title}</h2>
        <div className="bodyBuilding-Beginner-container">
          {videoData.map((ele) => (
          
            <div className="bodyBuildingCard">
         
              <div className="bodyBuildingCard-img">
                <NavLink
                  to={{
                    pathname: `/video/${ele._id}`,
                  }}
                  state={{ from: location.pathname }}
                >
                  {" "}
                  <img
                    className="bodyBuildingImage"
                    src={ele.img}
                    alt=""
                  />{" "}
                </NavLink>
                <div className="bodyBuildingCard-CTA">
                  <button
                    className="btn btn-primary btn-primary-hr-outline-out bodyBuilding-cta-btn"
                    onClick={() => setVideoURL(ele.url)}
                  >
                    Play Now
                  </button>
                  <NavLink
                    to={{
                      pathname: `/video/${ele._id}`,
                    }}
                    state={{ from: location.pathname }}
                  >
                    <button className="btn btn-primary btn-primary-hr-outline-out bodyBuilding-cta-btn">
                      view Details
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="bodyBuildingCard-desc">
                <a href={ele.channelLink}>
                  <img src={ele.channelIMG} alt="" />
                </a>
                <div className="bodybuilding-desc-info">
                  <h2>{ele.title}</h2>
                  <span>{ele.ChannelName}</span>
                </div>

                <i className="fas fa-ellipsis-v"></i>
                <div className="bodyBuilding-desc-CTA-list">
                  <ul>
                    <li
                      onClick={() => {
                        showModal(true);
                        setVideoid(ele);
                      }}
                    >
                      <i className="fab fa-google-play"></i>{" "}
                      <span>Save to Play list</span>
                    </li>

                    {addOrRemoveVideoFromLikedVideo(
                      likedVideo,
                      ele,
                      likedVideoDispatch,
                      true,
                      "span"
                    )}
                    {addOrRemoveVideoFromWatchLater(
                      watchLaterVideo,
                      ele,
                      watchLaterDispatch,
                      true,
                      "span"
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modal &&
        videoid != null &&
        showModalForVideoPlayListActions(
          playLists,
          showModal,
          videoid,
          createPlaylistBTN,
          setCreatePlaylistBTN,
          inputPlayList,
          setInputPlayList,
          playListDispatch
        )}
    </div>
  );
}

export default VideoListCOmponent;
