export const isVideoAlredyInPlaylist = (playLists, playlistID, video) => {
  const getPlayList = playLists.filter((ele) => ele.id == playlistID);
  const isVideoAlredyPlayListed = getPlayList[0].videos.filter(
    (ele) => ele.id == video.id
  );
  return isVideoAlredyPlayListed.length > 0 ? true : false;
};
export const addorRemoveVideoToPlayList = (
  playLists,
  playlistID,
  video,
  playListDispatch,
  tag,
  icon
) => {
  const getPlayList = playLists.filter((ele) => ele.id == playlistID);
  const isVideoAlredyPlayListed = getPlayList[0].videos.filter(
    (ele) => ele.id == video.id
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
  tag
) => {
  const isVideoAddedToWatchLater = watchLaterVideo.filter(
    (ele) => ele.id == video.id
  );
  if (isVideoAddedToWatchLater.length > 0) {
    return (
      <li
        onClick={() =>
          watchLaterDispatch({
            type: "REMOVE_FROM_WATCH_VIDEOS",
            payload: video.id,
          })
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
          watchLaterDispatch({ type: "ADD_TO_WATCH_VIDEOS", payload: video })
        }
      >
        {icon && <i className="far fa-clock" />}
        {tag == "span" ? (
          <span> Watch later</span>
        ) : (
          <h3>Watch later</h3>
        )}
      </li>
    );
};
export const addOrRemoveVideoFromLikedVideo = (
  likedVideo,
  video,
  likedVideoDispatch,
  icon,
  tag
) => {
  const isVideoLiked = likedVideo.filter((ele) => ele.id == video.id);
  if (isVideoLiked.length > 0) {
    return (
      <li
        onClick={() =>
          likedVideoDispatch({
            type: "REMOVE_FROM_LIKED_VIDEOS",
            payload: video,
          })
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
          likedVideoDispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: video })
        }
      >
        {icon && <i className="far fa-thumbs-up" />}
        {tag == "span" ? (
          <span> Like the video</span>
        ) : (
          <h3>Like the video</h3>
        )}
      </li>
    );
};
