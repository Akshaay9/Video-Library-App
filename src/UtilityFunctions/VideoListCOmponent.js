import React, { useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
import { UsePlayListContext } from "../Context/PlaylistContext/PlayListContext";
import { useWatchLaterContext } from "../Context/WatchLaterVideoContext/WatchLaterVideoContext";
import { useLikedVideoContext } from "../Context/LikedVideoContext/LikedVideoContext";
import { showModalForVideoPlayListActions } from "./VideoListFunctions";
import {
  addOrRemoveVideoFromLikedVideo,
  addOrRemoveVideoFromWatchLater,
} from "./playListsWatchLaterAndLikesCTAFunctions";
import { useLoginContext } from "../Context/loginRegistrationContext/loginRegistrationContext";
import { useToastContext } from "../Context/ToastContext/ToastContext";
import LoginModal from "../Components/LoginModal/LoginModal";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
function VideoListCOmponent({ ele, setVideoURL }) {
  let location = useLocation();
  const {
    state: { userInfo },
  } = useLoginContext();
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
  const { toastDispatch } = useToastContext();

  // modal useState
  const [modal, showModal] = useState(false);
  // cretae playlist modal useState
  const [createPlaylistBTN, setCreatePlaylistBTN] = useState(false);
  // useState to store id , so that it can  be used to call the funtion
  const [videoid, setVideoid] = useState(null);
  // playlist input
  const [inputPlayList, setInputPlayList] = useState("");

  // loader
  const [progressLoader, setProgressLoader] = useState(false);
  // circle loader
  const [circleLoader, setCircleLoader] = useState(false);
  // circle loader
  const [circleLoader1, setCircleLoader1] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <div>
      {loginModal && <LoginModal setLoginModal={setLoginModal} />}
      <div>
        <div className="bodyBuildingCard">
          <div className="bodyBuildingCard-img">
            <NavLink
              to={{
                pathname: `/video/${ele._id}`,
              }}
              state={{ from: location.pathname }}
            >
              {" "}
              <img className="bodyBuildingImage" src={ele.img} alt="" />{" "}
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
                    if (!userInfo.token || userInfo.token == null) {
                      setLoginModal(true);
                      return;
                    } else showModal(true);
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
                  "span",
                  userInfo.token,
                  circleLoader,
                  setCircleLoader,
                  toastDispatch,
                  setLoginModal
                )}
                {addOrRemoveVideoFromWatchLater(
                  watchLaterVideo,
                  ele,
                  watchLaterDispatch,
                  true,
                  "span",
                  userInfo.token,
                  circleLoader1,
                  setCircleLoader1,
                  toastDispatch,
                  setLoginModal
                )}
              </ul>
            </div>
          </div>
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
          playListDispatch,
          userInfo.token,
          progressLoader,
          setProgressLoader,
          toastDispatch,
          setLoginModal
        )}
    </div>
  );
}

export default VideoListCOmponent;
