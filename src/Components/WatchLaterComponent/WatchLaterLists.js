import React from "react";
import { useWatchLaterContext } from "../../Context/WatchLaterVideoContext/WatchLaterVideoContext";
import { NavLink, useLocation } from "react-router-dom";
import watchLaterSVG from "../../SVG/watchLaterSVG.svg";

function WatchLaterLists() {
  const {
    state: { watchLaterVideo },
    watchLaterDispatch,
  } = useWatchLaterContext();
  let location = useLocation();
  return (
    <div className="liked-video">
      <div className="playList-container-heading like-heading">
        Watch Later Videos
      </div>
      <div className="svg-empty watchlaterSVG">
        {watchLaterVideo.length == 0 && <img src={watchLaterSVG} alt="" />}
      </div>
      {watchLaterVideo.map((ele, index) => (
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
                  <p>{ ele.desc.slice(0,220)}...</p>
                </div>
              </div>
            </div>
          </NavLink>

          <div className="liked-video-mid">
            <NavLink
              to={{
                pathname: `/video/${ele.id}`,
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
                watchLaterDispatch({
                  type: "REMOVE_FROM_WATCH_VIDEOS",
                  payload: ele.id * 1,
                })
              }
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WatchLaterLists;
