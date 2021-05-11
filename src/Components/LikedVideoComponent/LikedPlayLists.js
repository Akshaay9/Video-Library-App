import React from "react";
import { useLikedVideoContext } from "../../Context/LikedVideoContext/LikedVideoContext";
import { NavLink, useLocation } from "react-router-dom";
import likedSVG from "../../SVG/likesSVG.svg";
function LikedPlayLists() {
  const {
    state: { likedVideo },
    likedVideoDispatch,
  } = useLikedVideoContext();
  let location = useLocation();


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
          <NavLink
            to={{
              pathname: `/video/${ele.videoID._id}`,
            }}
            state={{ from: location.pathname }}
          >
            <div className="liked-video-left">
              <div className="individual-right-videos-desc">
                <span className="like-count">{index + 1}</span>
                <div className="individual-right-img">
                  <img src={ele.videoID.img} alt="" />
                </div>
                <div className="individual-right-desc-title">
                  <h2>{ele.videoID.title}</h2>
                  <h3>{ele.videoID.ChannelName}</h3>
                  <p>{ele.videoID.desc.slice(0, 220)}...</p>
                </div>
              </div>
            </div>
          </NavLink>
          <div className="liked-video-mid">
            <NavLink
              to={{
                pathname: `/video/${ele.videoID._id}`,
              }}
              state={{ from: location.pathname }}
            >
              <i className="fab fa-google-play playlist-play"></i>
            </NavLink>
          </div>
          <div className="liked-video-right">
            <i
              className="fas fa-trash"
              onClick={() =>
                likedVideoDispatch({
                  type: "REMOVE_FROM_LIKED_VIDEOS",
                  payload: ele,
                })
              }
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LikedPlayLists;
