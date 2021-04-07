import { createContext, useReducer } from "react";

const LikedVideoContext = createContext();

const initialState = {
  likedVideo: localStorage.getItem("liked-video")
    ? JSON.parse(localStorage.getItem("liked-video"))
    : [],
  loading: true,
};

const likedVideoReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_LIKED_VIDEOS":
      return {
        ...state,
        likedVideo: [...state.likedVideo, payload],
      };
    case "REMOVE_FROM_LIKED_VIDEOS":
      return {
        ...state,
        likedVideo: state.likedVideo.filter((ele) => ele.id == payload.id),
      };

    default:
      return state;
  }
};

export const LikedVideoContextFun = ({ children }) => {
  const [state, dispatch] = useReducer(likedVideoReducer, initialState);

  return (
    <LikedVideoContext.Provider value={{ state, likedVideoDispatch: dispatch }}>
      {children}
    </LikedVideoContext.Provider>
  );
};
export const useLikedVideoContext = () => {
  return createContext(LikedVideoContext);
};
