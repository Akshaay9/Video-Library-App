import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import YouTube from "react-youtube";
import { useLikedVideoContext } from "../../Context/LikedVideoContext/LikedVideoContext";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
import { useWatchLaterContext } from "../../Context/WatchLaterVideoContext/WatchLaterVideoContext";
import { allVideoData } from "../../Data/AllData";
import {
  addOrRemoveVideoFromLikedVideo,
  addOrRemoveVideoFromWatchLater,
} from "../../UtilityFunctions/playListsWatchLaterAndLikesCTAFunctions";
import { showModalForVideoPlayListActions } from "../../UtilityFunctions/VideoListFunctions";
const opts = {
  height: "450vh",
  width: "100%",
};

function IndividialVideo() {
  // modal useState
  const [modal, showModal] = useState(false);
  // cretae playlist modal useState
  const [createPlaylistBTN, setCreatePlaylistBTN] = useState(false);
  // useState to store id , so that it can  be used to call the funtion
  const [videoid, setVideoid] = useState(null);
  // playlist input
  const [inputPlayList, setInputPlayList] = useState("");

  const { id } = useParams();
  const {
    state: { likedVideo },
    likedVideoDispatch,
  } = useLikedVideoContext();
  const {
    state: { playLists, loading },
    playListDispatch,
  } = UsePlayListContext();

  const {
    state: { watchLaterVideo },
    watchLaterDispatch,
  } = useWatchLaterContext();

  const location = useLocation();
  const prevPath = location.state.from;

  // get the individual video based on the pre path in hisotry
  const getIndividualVideoBasedOnPReviousPathOfHistory = () => {
    // if (prevPath === "/WatchLaterVideos") {
    //   return watchLaterVideo.filter((ele)=>ele.id==id)
    // }
    // else if (prevPath === "/likedvideo") {
    //   return likedVideo.filter((ele)=>ele.id==id)
    // }
    // else {
    return allVideoData.filter((ele) => ele.id == id * 1);
    // }
  };

  const individualVideo = getIndividualVideoBasedOnPReviousPathOfHistory();

  return (
    <div className="individualVideo">
      <div className="individual-videos-of-playList-container-left indi-video">
        <div className="individual-videos-of-playList-container-left-video">
          <YouTube videoId={individualVideo[0].url} opts={opts} />
        </div>

        <div className="individual-videos-of-playList-container-left-mid">
          <div className="individual-videos-of-playList-container-left-mid1">
            <h2>{individualVideo[0].title}</h2>
          </div>
          <div className="individual-videos-of-playList-container-left-mid2">
            {individualVideo[0].addedOn && (
              <h3>Added on : {individualVideo[0].addedOn}</h3>
            )}
            <div className="individual-videos-of-playList-container-left-mid2-icons indi-cta">
              {prevPath == "/WatchLaterVideos" && (
                <>
                  {" "}
                  {addOrRemoveVideoFromLikedVideo(
                    likedVideo,
                    individualVideo[0],
                    likedVideoDispatch,
                    false,
                    "h3"
                  )}
                  <h3
                    onClick={() => {
                      showModal(true);
                      setVideoid(individualVideo[0]);
                    }}
                  >
                    Add To Playlist
                  </h3>{" "}
                </>
              )}
              {prevPath == "/likedvideo" && (
                <>
                  {addOrRemoveVideoFromWatchLater(
                    watchLaterVideo,
                    individualVideo[0],
                    watchLaterDispatch
                  )}
                  <h3
                    onClick={() => {
                      showModal(true);
                      setVideoid(individualVideo[0]);
                    }}
                  >
                    Add To Playlist
                  </h3>
                </>
              )}
              {prevPath.includes("videos") && (
                <>
                  {addOrRemoveVideoFromLikedVideo(
                    likedVideo,
                    individualVideo[0],
                    likedVideoDispatch,
                    false,
                    "h3"
                  )}
                  {addOrRemoveVideoFromWatchLater(
                    watchLaterVideo,
                    individualVideo[0],
                    watchLaterDispatch
                  )}
                  <h3
                    onClick={() => {
                      showModal(true);
                      setVideoid(individualVideo[0]);
                    }}
                  >
                    Add To Playlist
                  </h3>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="individual-videos-of-playList-container-left-bottom">
          <div className="individual-videos-of-playList-container-left-bottom-img">
            <a href={individualVideo[0].channelLink}>
              <img src={individualVideo[0].channelIMG} alt="" />
            </a>
          </div>
          <div className="individual-videos-of-playList-container-left-bottom-desc">
            <h3>
              {individualVideo[0].ChannelName}
              <i style={{ marginLeft: "5px" }} className="fas fa-check"></i>
            </h3>
            <p>{individualVideo[0].desc}</p>
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
          playListDispatch
        )}
    </div>
  );
}

export default IndividialVideo;
