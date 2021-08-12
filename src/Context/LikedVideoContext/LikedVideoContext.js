import { createContext, useContext, useEffect, useReducer } from "react";

const LikedVideoContext = createContext();

const initialState = {
  likedVideo: [],
  loading: true,
};

const likedVideoReducer = (state, { type, payload }) => {
  
  switch (type) {
    case "LOAD_LIKED_VIDEOS":
      return {
        ...state,
        likedVideo: payload,
      };
    case "CLEAR_LIKED_VIDEOS":
      return {
        ...state,
        likedVideo: [],
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
