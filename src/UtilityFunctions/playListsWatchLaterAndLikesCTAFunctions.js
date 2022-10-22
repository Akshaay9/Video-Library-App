import { makeAnAPICall } from "../APICalls";
import PulseLoader from "react-spinners/PulseLoader";
import {BE_URL} from "../const"
// new playlist
export const apiCallToCreatePlaylist = (
  videoID,
  playListDispatch,
  dataToBeDispatched,
  token,
  setProgressLoader,
  toastDispatch
) => {
  if (setProgressLoader) {
    setProgressLoader(true);
  }
  makeAnAPICall(
    "POST",
    `${BE_URL}/api/playlist/new/${videoID}`,
    playListDispatch,
    "LOAD_PLAYLIST",
    dataToBeDispatched,
    token,
    toastDispatch,
    "playlist has been created",
    null,
    setProgressLoader
  );
};
// check for playlist
export const isVideoAlredyInPlaylist = (playLists, playlistID, video) => {
  const getPlayList = playLists.filter((ele) => ele._id == playlistID);
  const isVideoAlredyPlayListed = getPlayList[0].videos.filter(
    (ele) => ele.videoID._id == video._id
  );
  return isVideoAlredyPlayListed.length > 0 ? true : false;
};
// add or remove from playlist
export const addorRemoveVideoToPlayList = (
  playLists,
  playlistID,
  video,
  playListDispatch,
  token,
  setCircleLoader,
  toastDispatch
) => {
  const getPlayList = playLists.filter((ele) => ele._id == playlistID);
  const isVideoAlredyPlayListed = getPlayList[0].videos.filter(
    (ele) => ele.videoID._id == video._id
  );

  if (isVideoAlredyPlayListed.length > 0) {
    makeAnAPICall(
      "DELETE",
      `${BE_URL}/api/playlist/${playlistID}/${video._id}`,
      playListDispatch,
      "LOAD_PLAYLIST",
      null,
      token,
      toastDispatch,
      "Video removed from playlist",
      setCircleLoader
    );
  } else {
    makeAnAPICall(
      "POST",
      `${BE_URL}/api/playlist/${playlistID}/${video._id}`,
      playListDispatch,
      "LOAD_PLAYLIST",
      null,
      token,
      toastDispatch,
      "Video added to playlist",
      setCircleLoader
    );
  }
};

// watch later

export const addOrRemoveVideoFromWatchLater = (
  watchLaterVideo,
  video,
  watchLaterDispatch,
  icon,
  tag,
  token,
  circleLoader,
  setCircleLoader,
  toastDispatch,
  setLoginModal
) => {
  const isVideoAddedToWatchLater = watchLaterVideo.filter(
    (ele) => ele.videoID._id == video._id
  );

  if (isVideoAddedToWatchLater.length > 0) {
    return (
      <li
        onClick={(e) => {
          setCircleLoader(true);
          makeAnAPICall(
            `DELETE`,
            `${BE_URL}/api/watchlater/${video._id}`,
            watchLaterDispatch,
            "LOAD_WATCH_LATER",
            null,
            token,
            toastDispatch,
            "Video Removed From watchlater",
            setCircleLoader,
            null,
            setLoginModal
          );
        }}
      >
        {circleLoader ? (
          <>
            <div className="circle-loader">
              <PulseLoader />
            </div>
          </>
        ) : (
          <>
            {icon && <i className="far fa-clock" />}
            {tag == "span" ? (
              <span>remove from Watch later</span>
            ) : (
              <h3>remove from Watch later</h3>
            )}
          </>
        )}
      </li>
    );
  } else
    return (
      <li
        onClick={(e) => {
          if (token == null || !token) {
            setLoginModal(true);
            return;
          } else setCircleLoader(true);
          makeAnAPICall(
            `POST`,
            `${BE_URL}/api/watchlater/${video._id}`,
            watchLaterDispatch,
            "LOAD_WATCH_LATER",
            null,
            token,
            toastDispatch,
            "Video added to watchlater",
            setCircleLoader,
            null,
            setLoginModal
          );
        }}
      >
        {circleLoader ? (
          <>
            <div className="circle-loader">
              <PulseLoader />
            </div>
          </>
        ) : (
          <>
            {icon && <i className="far fa-clock" />}
            {tag == "span" ? <span>Watch later</span> : <h3>Watch later</h3>}
          </>
        )}
      </li>
    );
};

// likedvideos
export const addOrRemoveVideoFromLikedVideo = (
  likedVideo,
  video,
  likedVideoDispatch,
  icon,
  tag,
  token,
  circleLoader,
  setCircleLoader,
  toastDispatch,
  setLoginModal
) => {
  const isVideoLiked = likedVideo.filter((ele) => ele.videoID._id == video._id);
  if (isVideoLiked.length > 0) {
    return (
      <li
        id={+5}
        onClick={(e) => {
          setCircleLoader(true);
          makeAnAPICall(
            `DELETE`,
            `${BE_URL}/api/likedvideos/${video._id}`,
            likedVideoDispatch,
            "LOAD_LIKED_VIDEOS",
            null,
            token,
            toastDispatch,
            "Video has been disliked",
            setCircleLoader,
            null,
            setLoginModal
          );
        }}
      >
        {circleLoader ? (
          <>
            <div className="circle-loader">
              <PulseLoader />
            </div>
          </>
        ) : (
          <>
            {icon && <i className="far fa-thumbs-down" />}
            {tag == "span" ? (
              <span> UnLike the video</span>
            ) : (
              <h3>UnLike the video</h3>
            )}
          </>
        )}
      </li>
    );
  } else
    return (
      <li
        onClick={(e) => {
          if (token == null || !token) {
            setLoginModal(true);
            return;
          } else setCircleLoader(true);
          makeAnAPICall(
            `POST`,
            `${BE_URL}/api/likedvideos/${video._id}`,
            likedVideoDispatch,
            "LOAD_LIKED_VIDEOS",
            null,
            token,
            toastDispatch,
            "Video has been liked",
            setCircleLoader,
            null,
            setLoginModal
          );
        }}
      >
        {circleLoader ? (
          <>
            <div className="circle-loader">
              <PulseLoader />
            </div>
          </>
        ) : (
          <>
            {icon && <i className="far fa-thumbs-up" />}
            {tag == "span" ? (
              <span> Like the video</span>
            ) : (
              <h3>Like the video</h3>
            )}
          </>
        )}
      </li>
    );
};
