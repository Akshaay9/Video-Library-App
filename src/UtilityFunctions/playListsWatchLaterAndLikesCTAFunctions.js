import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import { makeAnAPICall } from "../APICalls";

export const isVideoAlredyInPlaylist = (playLists, playlistID, video) => {
  const getPlayList = playLists.filter((ele) => ele._id == playlistID);
  const isVideoAlredyPlayListed = getPlayList[0].videos.filter(
    (ele) => ele.videoID._id == video._id
  );
  return isVideoAlredyPlayListed.length > 0 ? true : false;
};

export const addorRemoveVideoToPlayList = (
  playLists,
  playlistID,
  video,
  playListDispatch
) => {
  const getPlayList = playLists.filter((ele) => ele._id == playlistID);
  const isVideoAlredyPlayListed = getPlayList[0].videos.filter(
    (ele) => ele.videoID._id == video._id
  );

  if (isVideoAlredyPlayListed.length > 0) {
    playListDispatch({
      type: "REMOVE_FROM_PLAYLIST",
      payload: { playlistID, video },
    });
  } else {
    playListDispatch({
      type: "ADD_VIDEO_TO_PLAYLIST",
      payload: { playlistID, video },
    });
  }
};
export const addOrRemoveVideoFromWatchLater = (
  watchLaterVideo,
  video,
  watchLaterDispatch,
  icon,
  tag,
  token
) => {
  const isVideoAddedToWatchLater = watchLaterVideo.filter(
    (ele) => ele.videoID._id == video._id
  );

  if (isVideoAddedToWatchLater.length > 0) {
    return (
      <li
        onClick={() =>
          makeAnAPICall(
            `DELETE`,
            `https://cryptic-hamlet-94693.herokuapp.com/api/watchlater/${video._id}`,
            watchLaterDispatch,
            "LOAD_WATCH_LATER",
            null,
            token,
            null,
            null,
            null
          )
        }
      >
        {icon && <i className="far fa-clock" />}
        {tag == "span" ? (
          <span>remove from Watch later</span>
        ) : (
          <h3>remove from Watch later</h3>
        )}
      </li>
    );
  } else
    return (
      <li
        onClick={() =>
          makeAnAPICall(
            `POST`,
            `https://cryptic-hamlet-94693.herokuapp.com/api/watchlater/${video._id}`,
            watchLaterDispatch,
            "LOAD_WATCH_LATER",
            null,
            token,
            null,
            null,
            null
          )
        }
      >
        {icon && <i className="far fa-clock" />}
        {tag == "span" ? <span> Watch later</span> : <h3>Watch later</h3>}
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
  token
) => {
  const isVideoLiked = likedVideo.filter((ele) => ele.videoID._id == video._id);
  if (isVideoLiked.length > 0) {
    return (
      <li
        onClick={() =>
          makeAnAPICall(
            `DELETE`,
            `https://cryptic-hamlet-94693.herokuapp.com/api/likedvideos/${video._id}`,
            likedVideoDispatch,
            "LOAD_LIKED_VIDEOS",
            null,
            token,
            null,
            null,
            null
          )
        }
      >
        {icon && <i className="far fa-thumbs-down" />}
        {tag == "span" ? (
          <span> UnLike the video</span>
        ) : (
          <h3>UnLike the video</h3>
        )}
      </li>
    );
  } else
    return (
      <li
        onClick={() =>
          makeAnAPICall(
            `POST`,
            `https://cryptic-hamlet-94693.herokuapp.com/api/likedvideos/${video._id}`,
            likedVideoDispatch,
            "LOAD_LIKED_VIDEOS",
            null,
            token,
            null,
            null,
            null
          )
        }
      >
        {icon && <i className="far fa-thumbs-up" />}
        {tag == "span" ? <span> Like the video</span> : <h3>Like the video</h3>}
      </li>
    );
};
