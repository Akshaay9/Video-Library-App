export const playListReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playLists: state.playLists.map((ele) =>
          ele.id == payload.playlistID
            ? { ...ele, videos: [...ele.videos, payload.video] }
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
          ele.id == payload.id ? { ...ele, name: payload.name } : ele
        ),
      };
    case "UPDATE_PLAYLIST_DESC":
      return {
        ...state,
        playLists: state.playLists.map((ele) =>
          ele.id == payload.id ? { ...ele, desc: payload.desc } : ele
        ),
      };
    default:
      return state;
  }
};
