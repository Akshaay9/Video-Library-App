import { makeAnAPICall } from "../APICalls";
import PulseLoader from "react-spinners/PulseLoader";
// new playlist
export const apiCallToCreatePlaylist = (
  videoID,
  playListDispatch,
  dataToBeDispatched,
  token,
  setProgressLoader
) => {
  if (setProgressLoader) {
    setProgressLoader(true);
  }
  makeAnAPICall(
    "POST",
    `https://cryptic-hamlet-94693.herokuapp.com/api/playlist/new/${videoID}`,
    playListDispatch,
    "LOAD_PLAYLIST",
    dataToBeDispatched,
    token,
    null,
    null,
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
  setCircleLoader
) => {
  const getPlayList = playLists.filter((ele) => ele._id == playlistID);
  const isVideoAlredyPlayListed = getPlayList[0].videos.filter(
    (ele) => ele.videoID._id == video._id
  );

  if (isVideoAlredyPlayListed.length > 0) {
    makeAnAPICall(
      "DELETE",
      `https://cryptic-hamlet-94693.herokuapp.com/api/playlist/${playlistID}/${video._id}`,
      playListDispatch,
      "LOAD_PLAYLIST",
      null,
      token,
      null,
      null,
      setCircleLoader
    );
  } else {
    makeAnAPICall(
      "POST",
      `https://cryptic-hamlet-94693.herokuapp.com/api/playlist/${playlistID}/${video._id}`,
      playListDispatch,
      "LOAD_PLAYLIST",
      null,
      token,
      null,
      null,
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
  setCircleLoader
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
            `https://cryptic-hamlet-94693.herokuapp.com/api/watchlater/${video._id}`,
            watchLaterDispatch,
            "LOAD_WATCH_LATER",
            null,
            token,
            null,
            null,
            setCircleLoader
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
          setCircleLoader(true);
          makeAnAPICall(
            `POST`,
            `https://cryptic-hamlet-94693.herokuapp.com/api/watchlater/${video._id}`,
            watchLaterDispatch,
            "LOAD_WATCH_LATER",
            null,
            token,
            null,
            null,
            setCircleLoader
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
  setCircleLoader
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
            `https://cryptic-hamlet-94693.herokuapp.com/api/likedvideos/${video._id}`,
            likedVideoDispatch,
            "LOAD_LIKED_VIDEOS",
            null,
            token,
            null,
            null,
            setCircleLoader
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
          setCircleLoader(true);
          makeAnAPICall(
            `POST`,
            `https://cryptic-hamlet-94693.herokuapp.com/api/likedvideos/${video._id}`,
            likedVideoDispatch,
            "LOAD_LIKED_VIDEOS",
            null,
            token,
            null,
            null,
            setCircleLoader
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
