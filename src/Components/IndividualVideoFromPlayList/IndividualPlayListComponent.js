import React, { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useLikedVideoContext } from "../../Context/LikedVideoContext/LikedVideoContext";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
import { useWatchLaterContext } from "../../Context/WatchLaterVideoContext/WatchLaterVideoContext";
import {
  addOrRemoveVideoFromLikedVideo,
  addOrRemoveVideoFromWatchLater,
} from "../../UtilityFunctions/playListsWatchLaterAndLikesCTAFunctions";
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
  // const [updateNote, setUpdateNote] = useState(false);

  // fun to save the notes of a video
  const saveNoteOfAVIdeo = () => {
    setShowModal(false);
    setNewNoteForInput("");
    setNewNoteForDesc("");
  };

  const updateUsersNote = (id) => {
    const updateNoteTitleAndDesc =
      individualVideo.length > 0 &&
      individualVideo[0]?.notes.filter((ele) => ele.notesID._id == id);
    setNewNoteForInput(updateNoteTitleAndDesc[0].notesID.title);
    setNewNoteForDesc(updateNoteTitleAndDesc[0].notesID.description);
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
                <i
                  className="fas fa-trash"
                  onClick={() =>
                    playListDispatch({
                      type: "DELETE_PLAYLIST_NOTES",
                      payload: {
                        playListid: playListid * 1,
                        videoid: videoid * 1,
                        noteid: ele.id * 1,
                      },
                    })
                  }
                ></i>
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
                  likedVideoDispatch
                )}
                {addOrRemoveVideoFromWatchLater(
                  watchLaterVideo,
                  individualVideo.length > 0 && individualVideo[0].videoID,
                  watchLaterDispatch
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
