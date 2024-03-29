import {
  addorRemoveVideoToPlayList,
  apiCallToCreatePlaylist,
  isVideoAlredyInPlaylist,
} from "./playListsWatchLaterAndLikesCTAFunctions";
import LinearProgress from "@material-ui/core/LinearProgress";
import InputPlaylistComponent from "../Components/InputPlayListComponent/InputPlaylistComponent";

export const showModalForVideoPlayListActions = (
  playLists,
  showModal,
  video,
  createPlaylistBTN,
  setCreatePlaylistBTN,
  inputPlayList,
  setInputPlayList,
  playListDispatch,
  token,
  progressLoader,
  setProgressLoader,
  toastDispatch
) => {
  // function to dispatch acton which create a new playlists and adds a video to it
  const funToCreatePlaylistAddVideo = (video) => {
    const dataToBeDispatched = {
      name: inputPlayList,
    };
    apiCallToCreatePlaylist(
      video._id,
      playListDispatch,
      dataToBeDispatched,
      token,
      setProgressLoader,
      toastDispatch
    );
    setCreatePlaylistBTN(false);
    setInputPlayList("");
  };
  const modalCLick = (e) => {
    if (e === "modal-playList-container") {
      showModal(false);
      setCreatePlaylistBTN(false);
      setInputPlayList("");
    }
  };

  return (
    <div
      className="modal-playList-container"
      onClick={(e) => modalCLick(e.target.classList.value)}
    >
      <div className="modal-playList-cta">
        <div className="modal-playlist-top">
          <h3>Save To...</h3>
          {/* <i
            class="fas fa-times"
            onClick={() => {
              showModal(false);
              setCreatePlaylistBTN(false);
            }}
          ></i> */}
        </div>
        <div className="modal-playlist-mid">
          {progressLoader && <LinearProgress />}
          {playLists.length > 0 && (
            <ul>
              {playLists.map((ele) => (
                <InputPlaylistComponent
                  playLists={playLists}
                  ele={ele}
                  video={video}
                  playListDispatch={playListDispatch}
                  token={token}
                />
              ))}
            </ul>
          )}
          <div className="modal-playlist-bottom">
            <button
              className="btn btn-secondary btn-secondary-hr-outline-in btn-playlist-cta "
              disabled={progressLoader == true}
              onClick={() => setCreatePlaylistBTN(true)}
            >
              Add a PlayList
            </button>
          </div>
          {createPlaylistBTN && (
            <div className="modal-playlist-bottom">
              <input
                type="text"
                placeholder="enter playlist"
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
