import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import YouTube from "react-youtube";
import { makeAnAPICall } from "../../APICalls";
import { useLikedVideoContext } from "../../Context/LikedVideoContext/LikedVideoContext";
import { useLoginContext } from "../../Context/loginRegistrationContext/loginRegistrationContext";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
import { useToastContext } from "../../Context/ToastContext/ToastContext";
import { useWatchLaterContext } from "../../Context/WatchLaterVideoContext/WatchLaterVideoContext";
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
  // useState to store individual video
  const [individualVideo, setIndividualVideos] = useState({});
  // useState from loading 1
  const [loader, setLoader] = useState(false);
  // circle loader
  const [circleLoader, setCircleLoader] = useState(false);
  // circle loader
  const [circleLoader1, setCircleLoader1] = useState(false);
    // loader
    const [progressLoader, setProgressLoader] = useState(false);
  

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

  const {
    state: { userInfo },
  } = useLoginContext();
  const { toastDispatch } = useToastContext();

  const location = useLocation();
  const prevPath = location.state?.from
    ? location.state?.from
    : "videos/bodybuilding";

  useEffect(() => {
    (async () => {
      const video = await makeAnAPICall(
        "GET",
        `https://cryptic-hamlet-94693.herokuapp.com/api/videos/${id}`
      );
      setLoader(true);
      // console.log(video);
      setIndividualVideos(video.data);
    })();
  }, []);

  // get the individual video based on the pre path in hisotry
  // const getIndividualVideoBasedOnPReviousPathOfHistory = () => {
  // if (prevPath === "/WatchLaterVideos") {
  //   return watchLaterVideo.filter((ele)=>ele.id==id)
  // }
  // else if (prevPath === "/likedvideo") {
  //   return likedVideo.filter((ele)=>ele.id==id)
  // }
  // else {
  // return allVideoData.filter((ele) => ele.id == id * 1);
  // }
  // };

  // const individualVideo = getIndividualVideoBasedOnPReviousPathOfHistory();

  return (
    <div className="individualVideo">
      <div className="individual-videos-of-playList-container-left indi-video">
        <div className="individual-videos-of-playList-container-left-video">
          {loader && <YouTube videoId={individualVideo?.url} opts={opts} />}
        </div>

        <div className="individual-videos-of-playList-container-left-mid">
          <div className="individual-videos-of-playList-container-left-mid1">
            <h2>{individualVideo?.title}</h2>
          </div>
          <div className="individual-videos-of-playList-container-left-mid2">
            {individualVideo?.addedOn && (
              <h3>Added on : {individualVideo.addedOn}</h3>
            )}
            <div className="individual-videos-of-playList-container-left-mid2-icons indi-cta">
              {prevPath == "/WatchLaterVideos" && (
                <>
                  {" "}
                  {addOrRemoveVideoFromLikedVideo(
                    likedVideo,
                    individualVideo,
                    likedVideoDispatch,
                    false,
                    "h3",
                    userInfo.token,
                    circleLoader,
                    setCircleLoader,
                    toastDispatch
                  )}
                  <h3
                    onClick={() => {
                      showModal(true);
                      setVideoid(individualVideo);
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
                    individualVideo,
                    watchLaterDispatch,
                    false,
                    "h3",
                    userInfo.token,
                    circleLoader1,
                    setCircleLoader1,
                    toastDispatch
                  )}
                  <h3
                    onClick={() => {
                      showModal(true);
                      setVideoid(individualVideo);
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
                    individualVideo,
                    likedVideoDispatch,
                    false,
                    "h3",
                    userInfo.token,
                    circleLoader,
                    setCircleLoader,
                    toastDispatch
                  )}
                  {addOrRemoveVideoFromWatchLater(
                    watchLaterVideo,
                    individualVideo,
                    watchLaterDispatch,
                    false,
                    "h3",
                    userInfo.token,
                    circleLoader1,
                    setCircleLoader1,
                    toastDispatch
                  )}
                  <h3
                    onClick={() => {
                      showModal(true);
                      setVideoid(individualVideo);
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
            <a href={individualVideo?.channelLink}>
              <img src={individualVideo?.channelIMG} alt="" />
            </a>
          </div>
          <div className="individual-videos-of-playList-container-left-bottom-desc">
            <h3>
              {individualVideo?.ChannelName}
              <i style={{ marginLeft: "5px" }} className="fas fa-check"></i>
            </h3>
            <p>{individualVideo?.desc}</p>
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
          toastDispatch
        )}
    </div>
  );
}

export default IndividialVideo;
