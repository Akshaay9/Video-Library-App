import React from "react";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
function PlayLists() {
  const {
    state: { playLists, loading },
    playListDispatch,
  } = UsePlayListContext();
  return (
    <>
      <div className="playList-container-heading">PlayList</div>
      {playLists.map((ele, index) => (
        <div className="playlists">
          <div className="playlist-img">
            {
              <img
                src={ele.videos[0].img}
                alt=""
              
              />
            }
            <span className="playlist-count">{index + 1}</span>
          </div>
          <div className="playlist-desc">
            <h2>{ele.name}</h2>
            <h4>{ele.videos.length} videos </h4>
            <h4>created on : {ele.dateCreated} </h4>
            <button
              className="btn btn-secondary btn-secondary-hr-outline-in playlist-btn-cta"
              onClick={() =>
                playListDispatch({ type: "DELETE_PLAYLIST", payload: ele.id })
              }
            >
              Delete
            </button>
          </div>
          <div className="playlist-cta">
            <i
              class="fab fa-google-play playlist-play"
            ></i>
          </div>
        </div>
      ))}
    </>
  );
}

export default PlayLists;
