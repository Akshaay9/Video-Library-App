import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import YouTube from "react-youtube";
import { useLikedVideoContext } from "../../Context/LikedVideoContext/LikedVideoContext";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
import { useWatchLaterContext } from "../../Context/WatchLaterVideoContext/WatchLaterVideoContext";
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
  const individualVideo = likedVideo.filter((ele) => ele.id == id);

  // fun to add or remove video from watch lster
  const addOrRemoveVideoFromWatchLater = (video) => {
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
          <h3>Remove from Watch Later</h3>
        </li>
      );
    } else
      return (
        <li
          onClick={() =>
            watchLaterDispatch({ type: "ADD_TO_WATCH_VIDEOS", payload: video })
          }
        >
          <h3>Watch Later</h3>
        </li>
      );
  };
  // function to check if video is(added/playlist )
  const isVideoAlredyInPlaylist = (playlistID, video) => {
    const getPlayList = playLists.filter((ele) => ele.id == playlistID);
    const isVideoAlredyPlayListed = getPlayList[0].videos.filter(
      (ele) => ele.id == video.id
    );
    return isVideoAlredyPlayListed.length > 0 ? true : false;
  };
  // add or remove videos from playlist
  const addorRemoveVideoToPlayList = (playlistID, video) => {
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
  const funToCreatePlaylistAddVideo = (video) => {
    const date = new Date();
    const newPlayList = {
      id: Math.random(),
      name: inputPlayList,
      dateCreated: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
      videos: [
        {
          ...video,
          addedOn: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
          notes: [],
        },
      ],
    };
    playListDispatch({
      type: "CREATE_NEW_PLAYLIST",
      payload: newPlayList,
    });
    setCreatePlaylistBTN(false);
    setInputPlayList("");
  };
  // function to add video to playlist/Cretae a playlist
  const showModalForVideoPlayListActions = (video) => {
    return (
      <div className="modal-playList-container">
        <div className="modal-playList-cta">
          <div className="modal-playlist-top">
            <h3>Save To...</h3>
            <i
              class="fas fa-times"
              onClick={() => {
                showModal(false);
              }}
            ></i>
          </div>
          <div className="modal-playlist-mid">
            {playLists.length > 0 && (
              <ul>
                {playLists.map((ele) => (
                  <div className="modal-playlist-mid-li">
                    <input
                      type="checkbox"
                      checked={isVideoAlredyInPlaylist(ele.id, video)}
                      onClick={() => addorRemoveVideoToPlayList(ele.id, video)}
                    />
                    <span>{ele.name}</span>
                  </div>
                ))}
              </ul>
            )}
            <div className="modal-playlist-bottom">
              <button
                className="btn btn-secondary btn-secondary-hr-outline-in btn-playlist-cta "
                onClick={() => setCreatePlaylistBTN(true)}
              >
                Add a PlayList
              </button>
            </div>
            {createPlaylistBTN && (
              <div className="modal-playlist-bottom">
                <input
                  type="text"
                  className="input-playlist-cta"
                  value={inputPlayList}
                  onChange={(e) => setInputPlayList(e.target.value)}
                />
                <button
                  className="btn btn-secondary btn-secondary-hr-outline-in btn-playlist-cta2 secondary-disabled"
                  disabled={inputPlayList == ""}
                  onClick={() => funToCreatePlaylistAddVideo(videoid)}
                >
                  Create a PlayList
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  const addOrRemoveVideoFromLikedVideo = (video) => {
    const isVideoLiked = likedVideo.filter((ele) => ele.id == video.id);
    if (isVideoLiked.length > 0) {
      return (
        <li
          onClick={() =>
            likedVideoDispatch({
              type: "REMOVE_FROM_LIKED_VIDEOS",
              payload: video * 1,
            })
          }
        >
          <i className="far fa-thumbs-up"></i> <span>UnLike the video</span>
        </li>
      );
    } else
      return (
        <li
          onClick={() =>
            likedVideoDispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: video })
          }
        >
          <i className="far fa-thumbs-up"></i> <span>Like the video</span>
        </li>
      );
  };
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
            <h3>Added on : {individualVideo[0].addedOn}</h3>
            <div className="individual-videos-of-playList-container-left-mid2-icons indi-cta">
              {prevPath == "/likedvideo" && (
                <>
                  {" "}
                  {addOrRemoveVideoFromWatchLater(individualVideo[0])}
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

              {/* <h3>Like the video</h3>
              <h3>Watch Later</h3>
              <h3>Add To Playlist</h3> */}
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
      {modal && videoid != null && showModalForVideoPlayListActions(videoid)}
    </div>
  );
}

export default IndividialVideo;
