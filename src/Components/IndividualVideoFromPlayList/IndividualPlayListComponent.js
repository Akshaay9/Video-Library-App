import React, { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useLikedVideoContext } from "../../Context/LikedVideoContext/LikedVideoContext";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
import { useWatchLaterContext } from "../../Context/WatchLaterVideoContext/WatchLaterVideoContext";
import { useLoginContext } from "../../Context/loginRegistrationContext/loginRegistrationContext";
import {
  addOrRemoveVideoFromLikedVideo,
  addOrRemoveVideoFromWatchLater,
} from "../../UtilityFunctions/playListsWatchLaterAndLikesCTAFunctions";
import { makeAnAPICall } from "../../APICalls";
import TrashButtonLoader from "../TrashButtonLoader/TrashButtonLoader";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useToastContext } from "../../Context/ToastContext/ToastContext";
function IndividualPlayListComponent() {
  const { playListid, videoid } = useParams();

  const {
    state: { playLists, loading },
    playListDispatch,
  } = UsePlayListContext();

  const {
    state: { watchLaterVideo },
    watchLaterDispatch,
  } = useWatchLaterContext();
  const {
    state: { likedVideo },
    likedVideoDispatch,
  } = useLikedVideoContext();

  // usercontxt api
  const {
    state: { userInfo },
  } = useLoginContext();

  const { toastDispatch } = useToastContext();

  const individualPlaylist = playLists.filter((ele) => ele._id == playListid);

  const individualVideo =
    individualPlaylist.length > 0 &&
    individualPlaylist[0]?.videos.filter((ele) => ele.videoID._id == videoid);
  console.log(individualVideo);

  const opts = {
    height: "450vh",
    width: "100%",
  };

  // show Mdal to Add A Note
  const [showModal, setShowModal] = useState(false);
  // useState for new Note input
  const [NewNoteForInput, setNewNoteForInput] = useState("");
  const [NewNoteForDesc, setNewNoteForDesc] = useState("");
  // updateNote
  const [updateNote, setUpdateNote] = useState(false);
  // useState to get notes id
  const [notesid, setNotesid] = useState(null);

  const [circleLoader, setCircleLoader] = useState(false);
  // circle loader
  const [circleLoader1, setCircleLoader1] = useState(false);

  const [progressLoader, setProgressLoader] = useState(false);

  // fun to save the notes of a video
  const saveNoteOfAVIdeo = () => {
    setProgressLoader(true);
    if (updateNote == false) {
      const dataToBeDispatched = {
        title: NewNoteForInput,
        description: NewNoteForDesc,
      };
      makeAnAPICall(
        `POST`,
        `https://cryptic-hamlet-94693.herokuapp.com/api/notes/${playListid}/${videoid}`,
        playListDispatch,
        `LOAD_PLAYLIST`,
        dataToBeDispatched,
        userInfo.token,
        toastDispatch,
        "Note has been added",
        setProgressLoader
      );
      setShowModal(false);
      setNewNoteForInput("");
      setNewNoteForDesc("");
      return;
    } else {
      const dataToBeDispatched = {
        title: NewNoteForInput,
        description: NewNoteForDesc,
      };
      makeAnAPICall(
        `POST`,
        `https://cryptic-hamlet-94693.herokuapp.com/api/notes/${notesid}`,
        playListDispatch,
        `LOAD_PLAYLIST`,
        dataToBeDispatched,
        userInfo.token,
        toastDispatch,
        "Note has been updated",
        setProgressLoader
      );
      console.log("run2");
      setShowModal(false);
      setNewNoteForInput("");
      setNewNoteForDesc("");
    }
  };

  const updateUsersNote = (id) => {
    const updateNoteTitleAndDesc =
      individualVideo.length > 0 &&
      individualVideo[0]?.notes.filter((ele) => ele.notesID._id == id);
    setNewNoteForInput(updateNoteTitleAndDesc[0].notesID.title);
    setNewNoteForDesc(updateNoteTitleAndDesc[0].notesID.description);
    setUpdateNote(true);
    setNotesid(id);
    setShowModal(true);
  };

  // Fun to edit and iterate over notes
  const iterateOverNotes = () => {
    return (
      individualVideo.length > 0 &&
      individualVideo[0].notes.map((ele) => {
        return (
          <div className="individual-video-note">
            <div className="individual-video-note-header">
              <div className="individual-video-note-header-left">
                <h3>Title:{ele.notesID.title}</h3>
              </div>
              <div className="individual-video-note-header-right">
                <i
                  className="fas fa-pencil-alt"
                  onClick={() => updateUsersNote(ele.notesID._id)}
                ></i>
                <TrashButtonLoader
                  url={`https://cryptic-hamlet-94693.herokuapp.com/api/notes/${playListid}/${videoid}/${ele.notesID._id}`}
                  dispatch={playListDispatch}
                  dispatchtype={`LOAD_PLAYLIST`}
                  dataToBeDispatched={null}
                  token={userInfo.token}
                  msg={"notes removed from playlist"}
                />
              </div>
            </div>
            <div className="individual-video-note-header-desc">
              <p>Desc:{ele.notesID.description}</p>
            </div>
          </div>
        );
      })
    );
  };

  const addaNewNote = (id) => {
    return (
      <div className="modal-indi-playList-container">
        <div className="modal-indi-playlist-inputs">
          <h1>Notes</h1>

          <div className="modal-indi-playlist-title">
            <label htmlFor="">Title</label>
            <input
              type="text"
              value={NewNoteForInput}
              onChange={(e) => setNewNoteForInput(e.target.value)}
            />
          </div>
          <div className="modal-indi-playlist-desc">
            <label htmlFor="">Desc</label>
            <textarea
              id="w3review"
              rows="4"
              cols="50"
              value={NewNoteForDesc}
              onChange={(e) => setNewNoteForDesc(e.target.value)}
            />
          </div>
          <div className="modal-indi-playlist-cta">
            <button
              className="btn btn-primary btn-primary-hr-outline-out"
              onClick={() => {
                setShowModal(false);
                setNotesid(id);
                setNewNoteForDesc("");
                setNewNoteForInput("");
              }}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary btn-primary-hr-outline-out
              primary-disabled
              "
              onClick={() => saveNoteOfAVIdeo()}
              disabled={NewNoteForInput == "" || NewNoteForDesc == ""}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="individual-videos-of-playList-container">
        <div className="individual-videos-of-playList-container-left">
          <div className="individual-videos-of-playList-container-left-video">
            <YouTube videoId={individualVideo[0]?.videoID.url} opts={opts} />
          </div>

          <div className="individual-videos-of-playList-container-left-mid">
            <div className="individual-videos-of-playList-container-left-mid1">
              <h2>{individualVideo[0]?.videoID.title}</h2>
            </div>
            <div className="individual-videos-of-playList-container-left-mid2">
              <h3>
                Added on : {individualPlaylist[0]?.createdAt.slice(0, 10)}{" "}
              </h3>
              <div className="individual-videos-of-playList-container-left-mid2-icons indi-cta">
                {addOrRemoveVideoFromLikedVideo(
                  likedVideo,
                  individualVideo.length > 0 && individualVideo[0].videoID,
                  likedVideoDispatch,
                  false,
                  "h3",
                  userInfo.token,
                  circleLoader,
                  setCircleLoader,
                  toastDispatch
                )}
                {addOrRemoveVideoFromWatchLater(
                  watchLaterVideo,
                  individualVideo.length > 0 && individualVideo[0].videoID,
                  watchLaterDispatch,
                  false,
                  "h3",
                  userInfo.token,
                  circleLoader1,
                  setCircleLoader1,
                  toastDispatch
                )}
              </div>
            </div>
          </div>
          <div className="individual-videos-of-playList-container-left-bottom">
            <div className="individual-videos-of-playList-container-left-bottom-img">
              <a href={individualVideo[0]?.videoID.channelLink}>
                <img src={individualVideo[0]?.videoID.channelIMG} alt="" />
              </a>
            </div>
            <div className="individual-videos-of-playList-container-left-bottom-desc">
              <h3>
                {individualVideo[0]?.videoID.ChannelName}
                <i style={{ marginLeft: "5px" }} className="fas fa-check"></i>
              </h3>
              <p>{individualVideo[0]?.videoID.desc}</p>
            </div>
          </div>
        </div>

        {/* notes */}

        <div className="individual-videos-of-playList-container-right">
          <div className="individual-videos-of-playList-container-right-notes">
            <div className="individual-videos-of-playList-container-right-notes-header">
              <h2>Notes</h2>
            </div>
            {progressLoader && <LinearProgress />}
            <div className="individual-videos-of-playlists-container-right-notes-body">
              {iterateOverNotes()}
            </div>
          </div>
          <div className="individual-videos-of-playList-container-right-cta">
            <button
              className="btn btn-primary btn-primary-hr-outline-out indiplaylistVideo-cta"
              onClick={() => setShowModal(true)}
            >
              Add a New Note
            </button>
          </div>
        </div>
        {showModal && addaNewNote()}
      </div>
    </>
  );
}

export default IndividualPlayListComponent;
