import { createContext, useContext, useEffect, useReducer } from "react";

const LikedVideoContext = createContext();

const initialState = {
  likedVideo: [],
  loading: true,
};

const likedVideoReducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "ADD_TO_LIKED_VIDEOS":
      const date = new Date();
      return {
        ...state,
        likedVideo: [
          ...state.likedVideo,
          {
            ...payload,
            addedOn: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
          },
        ],
      };
    case "REMOVE_FROM_LIKED_VIDEOS":
      return {
        ...state,
        likedVideo: state.likedVideo.filter((ele) => ele.id !== payload.id * 1),
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
export const useLikedVideoContext = () => useContext(LikedVideoContext);
