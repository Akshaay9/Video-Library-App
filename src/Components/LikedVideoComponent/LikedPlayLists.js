import React from "react";
import { useLikedVideoContext } from "../../Context/LikedVideoContext/LikedVideoContext";
import { NavLink, useLocation } from "react-router-dom";
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
      {likedVideo.map((ele, index) => (
        <div className="liked-video-container">
          <NavLink
            to={{
              pathname: `/video/${ele.id}`,
            }}
            state={{ from: location.pathname }}
          >
            <div className="liked-video-left">
              <div className="individual-right-videos-desc">
                <span className="like-count">{index + 1}</span>
                <div className="individual-right-img">
                  <img src={ele.img} alt="" />
                </div>
                <div className="individual-right-desc-title">
                  <h2>{ele.title}</h2>
                  <h3>{ele.ChannelName}</h3>
                </div>
              </div>
            </div>
          </NavLink>
          <div className="liked-video-mid">
            <i className="fab fa-google-play playlist-play"></i>
          </div>
          <div className="liked-video-right">
            <i className="fas fa-trash"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LikedPlayLists;
