import React, { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { UsePlayListContext } from "../../Context/PlaylistContext/PlayListContext";
function IndividualPlayListComponent() {
  const { playListid, videoid } = useParams();

  const {
    state: { playLists, loading },
    playListDispatch,
  } = UsePlayListContext();

  const individualPlaylist = playLists.filter((ele) => ele.id == playListid);
  const individualVideo = individualPlaylist[0].videos.filter(
    (ele) => ele.id == videoid
  );
  const opts = {
    height: "450vh",
    width: "100%",
  };

  // show Mdal to Add A Note
  const [showModal, setShowModal] = useState(false);
  // useState for new Note input
  const [NewNoteForInput, setNewNoteForInput] = useState("");
  const [NewNoteForDesc, setNewNoteForDesc] = useState("");
  // fun to save the notes of a video
  const saveNoteOfAVIdeo = () => {
    const date = new Date();
    const newNote = {
      id: Math.random(),
      title: NewNoteForInput,
      desc: NewNoteForDesc,
      editable: false,
      addedOn: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
    };
    playListDispatch({
      type: "ADD_NOTES_TO_PLAYLIST",
      payload: { playListid: playListid * 1, videoid: videoid * 1, newNote },
    });
    setShowModal(false);
    setNewNoteForInput("");
    setNewNoteForDesc("");
  };

  // Fun to edit and iterate over notes
  const iterateOverNotesAndEdit = () => {
    return individualVideo[0].notes.map((ele) => {
      if (!ele.editable)
        return (
          <div className="individual-video-note">
            <div className="individual-video-note-header">
              <div className="individual-video-note-header-left">
                <h3>Title:{ele.title}</h3>
              </div>
              <div className="individual-video-note-header-right">
                <i
                  className="fas fa-pencil-alt"
                  onClick={() =>
                    playListDispatch({
                      type: "UPDATE_PLAYLIST_NOTES",
                      payload: {
                        playListid: playListid * 1,
                        videoid: videoid * 1,
                        noteid: ele.id * 1,
                      },
                    })
                  }
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
              <p>Desc:{ele.desc}</p>
            </div>
          </div>
        );
      else
        return (
          <div className="individual-video-note">
            <div className="individual-video-note-header">
              <div className="individual-video-note-header-left">
                <p>Title</p>
                <input
                  type="text"
                  value={ele.title}
                  onChange={(e) =>
                    playListDispatch({
                      type: "UPDATE_PLAYLIST_NOTE_TITLE",
                      payload: {
                        playListid: playListid * 1,
                        videoid: videoid * 1,
                        noteid: ele.id * 1,
                        title: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="individual-video-note-header-right">
                <i
                  onClick={() =>
                    playListDispatch({
                      type: "UPDATE_PLAYLIST_NOTES",
                      payload: {
                        playListid: playListid * 1,
                        videoid: videoid * 1,
                        noteid: ele.id * 1,
                      },
                    })
                  }
                >
                  &#10004;
                </i>
                <i
                  onClick={() =>
                    playListDispatch({
                      type: "UPDATE_PLAYLIST_NOTES",
                      payload: {
                        playListid: playListid * 1,
                        videoid: videoid * 1,
                        noteid: ele.id * 1,
                      },
                    })
                  }
                >
                  {" "}
                  &#x2716;
                </i>
              </div>
            </div>
            <div className="individual-video-note-header-desc">
              <p>Desc</p>
              <textarea
                id="w3review"
                rows="4"
                cols="50"
                value={ele.desc}
                onChange={(e) =>
                  playListDispatch({
                    type: "UPDATE_PLAYLIST_NOTE_DESC",
                    payload: {
                      playListid: playListid * 1,
                      videoid: videoid * 1,
                      noteid: ele.id * 1,
                      desc: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
        );
    });
  };
  const addaNewNote = () => {
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
              onClick={() => setShowModal(false)}
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
            <YouTube videoId={individualVideo[0].url} opts={opts} />
          </div>

          <div className="individual-videos-of-playList-container-left-mid">
            <div className="individual-videos-of-playList-container-left-mid1">
              <h2>{individualVideo[0].title}</h2>
            </div>
            <div className="individual-videos-of-playList-container-left-mid2">
              <h3>Added on : {individualVideo[0].addedOn}</h3>
              <div className="individual-videos-of-playList-container-left-mid2-icons">
                <i className="fas fa-thumbs-up"></i>
                <i className="fas fa-clock"></i>
              </div>
            </div>
          </div>
          <div className="individual-videos-of-playList-container-left-bottom">
            <div className="individual-videos-of-playList-container-left-bottom-img">
              <a href={individualVideo[0].channelLink}>
                <img src={individualVideo[0].channelIMG} alt="" />
              </a>
            </div>
            <div className="individual-videos-of-playList-container-left-bottom-desc">
              <h3>
                {individualVideo[0].ChannelName}
                <i style={{ marginLeft: "5px" }} className="fas fa-check"></i>
              </h3>
              <p>{individualVideo[0].desc}</p>
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
              {iterateOverNotesAndEdit()}
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
