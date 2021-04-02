import React, { useState } from "react";
import YouTube from "react-youtube";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
import { beginnerBodyBuilding } from "../../Data/BodyBuildingData/BeginnerBodyBuildingData";
function BodyBuildingScreenProductList() {
  const {
    state: { playLists, loading },
    playListDispatch,
  } = UsePlayListContext();
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
  const opts = {
    height: "580vh",
    width: "100%",
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

  // fun to disable btn based on empty output or alredy contained playlist
  // const disableCreatePlayListBTB = () => false;

  // function to dispatch acton which create a new playlists and adds a video to it
  const funToCreatePlaylistAddVideo = (video) => {
    const newPlayList = {
      id: Math.random(),
      name: inputPlayList,
      videos:[video]
    }
    
    playListDispatch({
      type: "CREATE_NEW_PLAYLIST",
      payload: newPlayList,
    });
    setCreatePlaylistBTN(false)
  }

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
                setCreatePlaylistBTN(false);
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
                  onClick={()=>funToCreatePlaylistAddVideo(videoid)}
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

  return (
    <>
      {videoURl !== "" && (
        <div className="test">
          <i class="far fa-times-circle" onClick={() => setVideoURL("")}></i>
          <YouTube videoId={videoURl} opts={opts} className="BG-video-player" />
        </div>
      )}

      <div>
        <h1>Beginner Workout</h1>
        <div className="bodyBuilding-Beginner-container">
          {beginnerBodyBuilding.map((ele) => (
            <div className="bodyBuildingCard">
              <div className="bodyBuildingCard-img">
                <img className="bodyBuildingImage" src={ele.img} alt="" />
                <div className="bodyBuildingCard-CTA">
                  <button
                    className="btn btn-primary btn-primary-hr-outline-out bodyBuilding-cta-btn"
                    onClick={() => setVideoURL(ele.url)}
                  >
                    Play Now
                  </button>
                </div>
              </div>
              <div className="bodyBuildingCard-desc">
                <a href={ele.channelLink}>
                  <img src={ele.channelIMG} alt="" />
                </a>
                <h2>{ele.title}</h2>
                <i class="fas fa-ellipsis-v"></i>
                <div className="bodyBuilding-desc-CTA-list">
                  <ul>
                    <li>
                      <i class="fab fa-google-play"></i>{" "}
                      <span
                        onClick={() => {
                          showModal(true);
                          setVideoid(ele);
                        }}
                      >
                        Save to watch list
                      </span>
                    </li>
                    <li>
                      <i class="far fa-clock"></i> <span>watch Later</span>
                    </li>
                    <li>
                      <i class="far fa-thumbs-up"></i>{" "}
                      <span>Like the video</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modal && videoid != null && showModalForVideoPlayListActions(videoid)}
    </>
  );
}

export default BodyBuildingScreenProductList;
