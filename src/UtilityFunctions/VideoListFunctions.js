import {
  addorRemoveVideoToPlayList,
  isVideoAlredyInPlaylist,
} from "./playListsWatchLaterAndLikesCTAFunctions";

export const showModalForVideoPlayListActions = (
  playLists,
  showModal,
  video,
  createPlaylistBTN,
  setCreatePlaylistBTN,
  inputPlayList,
  setInputPlayList,
  playListDispatch
) => {
 
  

  // function to dispatch acton which create a new playlists and adds a video to it
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
                    checked={isVideoAlredyInPlaylist(playLists, ele.id, video)}
                    onClick={() =>
                      addorRemoveVideoToPlayList(
                        playLists,
                        ele.id,
                        video,
                        playListDispatch
                      )
                    }
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
                onClick={() => funToCreatePlaylistAddVideo(video)}
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
