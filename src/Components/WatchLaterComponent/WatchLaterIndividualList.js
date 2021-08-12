import React from "react";
import { useWatchLaterContext } from "../../Context/WatchLaterVideoContext/WatchLaterVideoContext";
import watchLaterSVG from "../../SVG/watchLaterSVG.svg";
import WatchLaterLists from "./WatchLaterLists";
function WatchLaterIndividualList() {
  const {
    state: { watchLaterVideo },
    watchLaterDispatch,
  } = useWatchLaterContext();

  return (
    <div className="liked-video">
      <div className="playList-container-heading like-heading">
        Watch Later Videos
      </div>
      <div className="svg-empty watchlaterSVG">
        {watchLaterVideo.length == 0 && <img src={watchLaterSVG} alt="" />}
      </div>
      {watchLaterVideo.length > 0 &&
        watchLaterVideo.map((ele, index) => (
          <div className="liked-video-container">
            <WatchLaterLists
              index={index}
              ele={ele}
              watchLaterDispatch={watchLaterDispatch}
            />
          </div>
        ))}
    </div>
  );
}

export default WatchLaterIndividualList;
