export const playListReducer = (state, { type, payload }) => {
  console.log(type);
  console.log(payload);
  switch (type) {
    case "ADD_VIDEO_TO_PLAYLIST":
      const date = new Date();
      return {
        ...state,
        playLists: state.playLists.map((ele) =>
          ele.id == payload.playlistID
            ? {
                ...ele,
                videos: [
                  ...ele.videos,
                  {
                    ...payload.video,
                    addedOn: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                  },
                ],
              }
            : ele
        ),
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playLists: state.playLists.map((ele) =>
          ele.id == payload.playlistID
            ? {
                ...ele,
                videos: ele.videos.filter(
                  (individualVideo) => individualVideo.id != payload.video.id
                ),
              }
            : ele
        ),
      };
    case "CREATE_NEW_PLAYLIST":
      return {
        ...state,
        playLists: [...state.playLists, payload],
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playLists: state.playLists.filter((ele) => ele.id != payload),
      };
    case "UPDATE_PLAYLIST_NAME":
      return {
        ...state,
        playLists: state.playLists.map((ele) =>
          ele.id == payload.playListid * 1
            ? { ...ele, name: payload.name }
            : ele
        ),
      };
    case "UPDATE_PLAYLIST_DESC":
      return {
        ...state,
        playLists: state.playLists.map((ele) =>
          ele.id == payload.id * 1 ? { ...ele, desc: payload.desc } : ele
        ),
      };
    case "ADD_NOTES_TO_PLAYLIST":
      return {
        ...state,
        playLists: state.playLists.map((playList) =>
          playList.id == payload.playListid * 1
            ? {
                ...playList,
                videos: [
                  ...playList.videos,
                  playList.videos.map((video) =>
                    video.id == payload.videoid * 1
                      ? {
                          ...video,
                          notes: [payload.newNote],
                        }
                      : video
                  ),
                ],
              }
            : playList
        ),
      };
    // case "UPDATE_NOTES_OF_PLAYLIST":
    //   return {
    //     ...state,
    //     playLists: state.playLists.map((ele) =>
    //       ele.id == payload.id * 1 ? { ...ele, desc: payload.desc } : ele
    //     ),
    //   };
    default:
      return state;
  }
};
