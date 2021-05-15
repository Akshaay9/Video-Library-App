import React from "react";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
import { NavLink } from "react-router-dom";
import playlistSVG from "../../SVG/playlistSVG.svg";
import { useLoginContext } from "../../Context/loginRegistrationContext/loginRegistrationContext";
import { makeAnAPICall } from "../../APICalls";
import ButtonLoader from "../ButtonLoader/ButtonLoader";
function PlayLists() {
  const {
    state: { playLists, loading },
    playListDispatch,
  } = UsePlayListContext();

  // usercontxt api
  const {
    state: { userInfo },
  } = useLoginContext();

  const altImg =
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60";

  const getAnImgForPoster = (videos) => {
    if (videos.length > 0) {
      return videos[0].videoID.img;
    } else {
      return altImg;
    }
  };

  return (
    <>
      <div className="playList-container-heading">PlayList</div>
      <div className="svg-empty">
        {playLists.length == 0 && <img src={playlistSVG} alt="" />}
      </div>
      {playLists.map((ele, index) => (
        <div className="playlists">
          <div className="playlist-img">
            <NavLink to={`/playlists/${ele._id}`}>
              <img src={getAnImgForPoster(ele.videos)} alt="" />
            </NavLink>

            <span className="playlist-count">{index + 1}</span>
          </div>
          <div className="playlist-desc">
            <h2>{ele.name}</h2>
            <h4>{ele.videos.length} videos </h4>
            <h4>
              created on : {ele?.createdAt.slice(0, 10)} <span> &nbsp;</span>
              {ele?.createdAt.slice(11, 20)}{" "}
            </h4>
            <h4>
              Last updated : {ele?.updatedAt.slice(0, 10)} <span> &nbsp;</span>
              {ele?.updatedAt.slice(11, 20)}
            </h4>

            <ButtonLoader
              url={`https://cryptic-hamlet-94693.herokuapp.com/api/playlist/${ele._id}`}
              dispatch={playListDispatch}
              dispatchtype={`LOAD_PLAYLIST`}
              dataToBeDispatched={null}
              token={userInfo.token}
              msg={"playlist deleted"}
            />
          </div>
          <div className="playlist-cta">
            <NavLink to={`/playlists/${ele.id}`}>
              <i className="fab fa-google-play playlist-play"></i>
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
}

export default PlayLists;
