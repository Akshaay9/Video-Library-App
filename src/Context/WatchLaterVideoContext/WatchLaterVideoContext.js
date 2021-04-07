import { createContext, useReducer } from "react";

const WatchLaterVideoContext = createContext();

const initialState = {
  watchLaterVideo: localStorage.getItem("watch-later-video")
    ? JSON.parse(localStorage.getItem("watch-later-video"))
    : [],
  loading: true,
};

const WatchLaterVideoReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WATCH_VIDEOS":
      return {
        ...state,
        watchLaterVideo: [...state.likedVideo, payload],
      };
    case "REMOVE_FROM_WATCH_VIDEOS":
      return {
        ...state,
        watchLaterVideo: state.likedVideo.filter((ele) => ele.id == payload.id),
      };

    default:
      return state;
  }
};

export const WatchLaterVideoContextFun = ({ children }) => {
  const [state, dispatch] = useReducer(WatchLaterVideoReducer, initialState);

  return (
    <WatchLaterVideoContext.Provider value={{ state, likedVideoDispatch: dispatch }}>
      {children}
    </WatchLaterVideoContext.Provider>
  );
};
export const useLikedVideoContext = () => {
  return createContext(WatchLaterVideoContext);
};
