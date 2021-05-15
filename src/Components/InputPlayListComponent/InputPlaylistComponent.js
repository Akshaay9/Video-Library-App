import React, { useState } from "react";
import {
  addorRemoveVideoToPlayList,
  isVideoAlredyInPlaylist,
} from "../../UtilityFunctions/playListsWatchLaterAndLikesCTAFunctions";
import PuffLoader from "react-spinners/PuffLoader";
import { useToastContext } from "../../Context/ToastContext/ToastContext";

function InputPlaylistComponent({
  playLists,
  ele,
  video,
  playListDispatch,
  token,
}) {
  // circle loader
  const [circleLoader, setCircleLoader] = useState(false);
  const { toastDispatch } = useToastContext();
  return (
    <div className="modal-playlist-mid-li">
      {circleLoader ? (
        <PuffLoader />
      ) : (
        <input
          type="checkbox"
          checked={isVideoAlredyInPlaylist(playLists, ele._id, video)}
          onClick={() => {
            setCircleLoader(true);
            addorRemoveVideoToPlayList(
              playLists,
              ele._id,
              video,
              playListDispatch,
              token,
              setCircleLoader,
              toastDispatch
            );
          }}
        />
      )}
      <span>{ele.name}</span>
    </div>
  );
}

export default InputPlaylistComponent;
