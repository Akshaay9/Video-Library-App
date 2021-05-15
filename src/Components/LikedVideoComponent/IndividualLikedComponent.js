import React from "react";
import { useLikedVideoContext } from "../../Context/LikedVideoContext/LikedVideoContext";
import LikedPlayLists from "./LikedPlayLists";
import likedSVG from "../../SVG/likesSVG.svg";

function IndividualLikedComponent() {
  const {
    state: { likedVideo },
    likedVideoDispatch,
  } = useLikedVideoContext();
  return (
    <div className="liked-video">
      <div className="playList-container-heading like-heading">
        Liked Videos
      </div>
      <div className="svg-empty">
        {likedVideo.length == 0 && <img src={likedSVG} alt="" />}
      </div>
      {likedVideo.map((ele, index) => (
        <div className="liked-video-container">
          <LikedPlayLists
            ele={ele}
            index={index}
            likedVideoDispatch={likedVideoDispatch}
          />
        </div>
      ))}
    </div>
  );
}

export default IndividualLikedComponent;
