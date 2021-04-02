export const playListReducer = (state, { type, payload }) => {
 
    switch (type) {
        case "CREATE_PLAYLIST":
            return {
                ...state,
                playLists:[...state.playLists,payload]
            }
        case "ADD_VIDEO_TO_PLAYLIST":
            return {
                ...state,
                playLists: state.playLists.map((ele) => ele.id == payload.playlistID ? { ...ele, videos: [...ele.videos, payload.video] }:ele)
            }
        case "REMOVE_FROM_PLAYLIST":
            return {
                ...state,
                playLists: state.playLists.map((ele) => ele.id == payload.playlistID ? {
                    ...ele,
                    videos: ele.videos.filter((individualVideo) => individualVideo.id != payload.video.id)
                } : ele)
            }
        case "CREATE_NEW_PLAYLIST":
            return {
                ...state,
                playLists:[...state.playLists,payload]
}
        default:
          return state
    }
}