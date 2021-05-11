export const playListReducer = (state, { type, payload }) => {

  switch (type) {
    case "LOAD_PLAYLIST":
      return {
        ...state,
        playLists:payload

      }
    // case "ADD_VIDEO_TO_PLAYLIST":
    //   const date = new Date();
    //   return {
    //     ...state,
    //     playLists: state.playLists.map((ele) =>
    //       ele.id == payload.playlistID
    //         ? {
    //             ...ele,
    //             videos: [
    //               ...ele.videos,
    //               {
    //                 ...payload.video,
    //                 addedOn: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
    //                 notes: [],
    //               },
    //             ],
    //           }
    //         : ele
    //     ),
    //   };
    // case "REMOVE_FROM_PLAYLIST":
    //   console.log(payload.playlistID);
    //   return {
    //     ...state,
    //     playLists: state.playLists.map((ele) =>
    //       ele.id == payload.playlistID*1
    //         ? {
    //             ...ele,
    //             videos: ele.videos.filter(
    //               (individualVideo) => individualVideo.id != payload.video.id
    //             ),
    //           }
    //         : ele
    //     ),
    //   };
    // case "CREATE_NEW_PLAYLIST":
    //   return {
    //     ...state,
    //     playLists: [...state.playLists, payload],
    //   };
    // case "DELETE_PLAYLIST":
    //   return {
    //     ...state,
    //     playLists: state.playLists.filter((ele) => ele.id != payload),
    //   };
    // case "UPDATE_PLAYLIST_NAME":
    //   return {
    //     ...state,
    //     playLists: state.playLists.map((ele) =>
    //       ele.id == payload.playListid * 1
    //         ? { ...ele, name: payload.name }
    //         : ele
    //     ),
    //   };
    // case "UPDATE_PLAYLIST_DESC":
    //   return {
    //     ...state,
    //     playLists: state.playLists.map((ele) =>
    //       ele.id == payload.id * 1 ? { ...ele, desc: payload.desc } : ele
    //     ),
    //   };
    // case "ADD_NOTES_TO_PLAYLIST":
    //   return {
    //     ...state,
    //     playLists: state.playLists.map((play) =>
    //       play.id == payload.playListid * 1
    //         ? {
    //             ...play,
    //             videos: play.videos.map((vid) =>
    //               vid.id == payload.videoid * 1
    //                 ? {
    //                     ...vid,
    //                     notes: [...vid.notes, payload.newNote],
    //                   }
    //                 : vid
    //             ),
    //           }
    //         : play
    //     ),
    //   };

    // case "UPDATE_PLAYLIST_NOTE_TITLE":
    //   return {
    //     ...state,
    //     playLists: state.playLists.map((play) =>
    //       play.id == payload.playListid * 1
    //         ? {
    //             ...play,
    //             videos: play.videos.map((vid) =>
    //               vid.id == payload.videoid * 1
    //                 ? {
    //                     ...vid,
    //                     notes: vid.notes.map((not) =>
    //                       not.id == payload.noteid * 1
    //                         ? { ...not, title: payload.title }
    //                         : not
    //                     ),
    //                   }
    //                 : vid
    //             ),
    //           }
    //         : play
    //     ),
    //   };
    // case "UPDATE_PLAYLIST_NOTE_DESC":
    //   return {
    //     ...state,
    //     playLists: state.playLists.map((play) =>
    //       play.id == payload.playListid * 1
    //         ? {
    //             ...play,
    //             videos: play.videos.map((vid) =>
    //               vid.id == payload.videoid * 1
    //                 ? {
    //                     ...vid,
    //                     notes: vid.notes.map((not) =>
    //                       not.id == payload.noteid * 1
    //                         ? { ...not, desc: payload.desc }
    //                         : not
    //                     ),
    //                   }
    //                 : vid
    //             ),
    //           }
    //         : play
    //     ),
    //   };
    // case "UPDATE_PLAYLIST_NOTES":
    //   return {
    //     ...state,
    //     playLists: state.playLists.map((play) =>
    //       play.id == payload.playListid * 1
    //         ? {
    //             ...play,
    //             videos: play.videos.map((vid) =>
    //               vid.id == payload.videoid * 1
    //                 ? {
    //                     ...vid,
    //                     notes: vid.notes.map((not) =>
    //                       not.id == payload.noteid * 1
    //                         ? { ...not, editable: !not.editable }
    //                         : not
    //                     ),
    //                   }
    //                 : vid
    //             ),
    //           }
    //         : play
    //     ),
    //   };
    // case "DELETE_PLAYLIST_NOTES":
    //   return {
    //     ...state,
    //     playLists: state.playLists.map((play) =>
    //       play.id == payload.playListid * 1
    //         ? {
    //             ...play,
    //             videos: play.videos.map((vid) =>
    //               vid.id == payload.videoid * 1
    //                 ? {
    //                     ...vid,
    //                     notes: vid.notes.filter(
    //                       (not) => not.id != payload.noteid * 1
    //                     ),
    //                   }
    //                 : vid
    //             ),
    //           }
    //         : play
    //     ),
    //   };
    default:
      return state;
  }
};
