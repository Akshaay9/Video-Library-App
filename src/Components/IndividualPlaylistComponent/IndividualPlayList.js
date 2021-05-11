import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function IndividualPlayList() {
  let navigate = useNavigate();
  // useState open playsit update name modal
  const [updatePlayListName, setUpdatePlayListName] = useState(true);
  // useState to open update playlist description modal
  const [updatePlayListDesc, setUpdatePlayListDesc] = useState(true);

  // UseParams
  const { playListid } = useParams();

  const {
    state: { playLists, loading },
    playListDispatch,
  } = UsePlayListContext();

  const individualPlaylist = playLists.filter((ele) => ele.id == playListid);


  // useState for playList Name on input
  const [playListNameForInput, setPlayListNameForInput] = useState(
    individualPlaylist[0].name
  );
  // useState for playList Dec on input
  const [playListDescForInput, setPlayListDescForInput] = useState(
    individualPlaylist[0].desc
  );

  const updateThePlayListName = () => {
    if (updatePlayListName)
      return (
        <div className="individual-playlist-left-row1-df">
          <h2>{individualPlaylist[0].name}</h2>
          <i
            className="fas fa-pen"
            onClick={() => setUpdatePlayListName(false)}
          ></i>
        </div>
      );
    else
      return (
        <div className="individual-playlist-left-row1">
          <div className="individual-playlist-left-row1-input">
            <input
              type="text"
              value={playListNameForInput}
              style={{ fontSize: "1rem" }}
              onChange={(e) => setPlayListNameForInput(e.target.value)}
            />
          </div>
          <div className="individual-playlist-left-row2-actions">
            <button
              className="btn btn-primary btn-primary-hr-outline-out indi-playList-btn-cta"
              onClick={() => setUpdatePlayListName(true)}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary btn-primary-hr-outline-out indi-playList-btn-cta"
              onClick={() => {
                playListDispatch({
                  type: "UPDATE_PLAYLIST_NAME",
                  payload: { playListid, name: playListNameForInput },
                });
                setUpdatePlayListName(true);
              }}
            >
              Update
            </button>
          </div>
        </div>
      );
  };

  const updatePlayListDescription = () => {
    if (updatePlayListDesc) {
      return (
        <div className="individual-playlist-left-macro-desc-1">
          <h2> {individualPlaylist[0].desc || "Enter Description"}</h2>
          <i
            class="fas fa-pen"
            onClick={() => setUpdatePlayListDesc(false)}
          ></i>
        </div>
      );
    } else {
      return (
        <div className="individual-playlist-left-macro-desc-2">
          <div className="individual-playlist-left-row1">
            <div className="individual-playlist-left-row1-input">
              <input
                type="text"
                value={playListDescForInput}
                style={{ fontSize: "1rem" }}
                onChange={(e) => setPlayListDescForInput(e.target.value)}
              />
            </div>
            <div className="individual-playlist-left-row2-actions">
              <button
                className="btn btn-primary btn-primary-hr-outline-out indi-playList-btn-cta"
                onClick={() => setUpdatePlayListDesc(true)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary btn-primary-hr-outline-out indi-playList-btn-cta"
                onClick={() => {
                  playListDispatch({
                    type: "UPDATE_PLAYLIST_DESC",
                    payload: { id: playListid * 1, desc: playListDescForInput },
                  });
                  setUpdatePlayListDesc(true);
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      );
    }
  };
  const altImg = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60";

  const getAnImgForPoster = (videos) => {
   
    if (videos.length > 0) {
      return videos[0].img
    }
    else {
      return altImg
    }
  }
  // individualPlaylist[0].videos[0].img
  return (
    <>
 
    <div className="inidivdual-playlist-container">
      <div className="individual-playlist-left">
        <div className="individual-playlist-left-img">
          <img src={getAnImgForPoster(individualPlaylist[0].videos)} alt="" />
        </div>
        <div className="individual-playlist-left-desc">
          {updateThePlayListName()}
        </div>
        <ul className="individual-playlist-left-micro-desc">
          <li>{individualPlaylist[0].videos.length} videos</li>
          <li>Created on {individualPlaylist[0].dateCreated}</li>
        </ul>
        <div className="individual-playlist-left-macro-desc">
          {updatePlayListDescription()}
        </div>
      </div>
      {/*  */}

      <div className="individual-playlist-right">
        {individualPlaylist[0].videos.map((ele) => (
          <div className="individual-right-videos">
            <NavLink to={`/playLists/${playListid}/${ele.id}`}>
              <div className="individual-right-videos-desc">
                <div className="individual-right-img updated-indi-img">
                  <img src={ele.img} alt="" />
                </div>
                <div className="individual-right-desc-title">
                  <h2>{ele.title}</h2>
                  <h3>{ele.ChannelName}</h3>
                </div>
              </div>
            </NavLink>

            <div className="individual-right-actions">
            <i class="fas fa-trash-alt" style={{paddingRight:".7rem"}}
            onClick={()=>playListDispatch({type:"REMOVE_FROM_PLAYLIST",payload:{playlistID:playListid,video:ele}})}
              ></i>
            </div>
          </div>
        ))}
      </div>
      </div>
      </>
  );
}

export default IndividualPlayList;
