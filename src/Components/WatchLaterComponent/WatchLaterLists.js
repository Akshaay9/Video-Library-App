import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useLoginContext } from "../../Context/loginRegistrationContext/loginRegistrationContext";

import TrashButtonLoader from "../TrashButtonLoader/TrashButtonLoader";

function WatchLaterLists({ index, ele, watchLaterDispatch }) {
  // console.log(ele);

  const {
    state: { userInfo },
  } = useLoginContext();
  let location = useLocation();

  return (
    <>
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
        <TrashButtonLoader
          url={`https://cryptic-hamlet-94693.herokuapp.com/api/watchlater/${ele.videoID._id}`}
          dispatch={watchLaterDispatch}
          dispatchtype={`LOAD_WATCH_LATER`}
          dataToBeDispatched={null}
          token={userInfo.token}
          msg={"video removed from watch later"}
        />
      </div>
    </>
  );
}

export default WatchLaterLists;
