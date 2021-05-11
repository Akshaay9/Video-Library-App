import React from "react";
import { useWatchLaterContext } from "../../Context/WatchLaterVideoContext/WatchLaterVideoContext";
import { NavLink, useLocation } from "react-router-dom";
import watchLaterSVG from "../../SVG/watchLaterSVG.svg";
import { useLoginContext } from "../../Context/loginRegistrationContext/loginRegistrationContext";
import { makeAnAPICall } from "../../APICalls";

function WatchLaterLists() {
  const {
    state: { watchLaterVideo },
    watchLaterDispatch,
  } = useWatchLaterContext();
  const {
    state: { userInfo },
  } = useLoginContext();
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
            {console.log(ele.videoID._id)}
            <i
              className="fas fa-trash"
              onClick={() =>
                makeAnAPICall(
                  `DELETE`,
                  `https://cryptic-hamlet-94693.herokuapp.com/api/watchlater/${ele.videoID._id}`,
                  watchLaterDispatch,
                  "LOAD_WATCH_LATER",
                  null,
                  userInfo.token,
                  null,
                  null,
                  null
                )
              }
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WatchLaterLists;
