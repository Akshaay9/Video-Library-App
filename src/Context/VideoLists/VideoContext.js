import { createContext, useContext, useReducer } from "react";

const videoContext = createContext();

const initialState = {
  bodyBuildingVideo: [],
  bodyBuildingLoading: true,

  fatlossVideo: [],
  fatlossLoading: true,

  calisthenicsVideos: [],
  calisthenicsLoading: true,

  yogaVideo: [],
  yogaLoading: true,

  zumbaData: [],
  zumbaLoading: true,
};

const videoContextReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOAD_BODYBUILDING_VIDEO":
      return {
        ...state,
        bodyBuildingVideo: payload,
        bodyBuildingLoading: false,
      };
    case "LOAD_FATLOSS_VIDEO":
      return {
        ...state,
        fatlossVideo: payload,
        fatlossLoading: false,
      };
    case "LOAD_CALISTHENICS_VIDEO":
      return {
        ...state,
        calisthenicsVideos: payload,
        calisthenicsLoading: false,
      };
    case "LOAD_YOGA_VIDEO":
      return {
        ...state,
        yogaVideo: payload,
        yogaLoading: false,
      };
    case "LOAD_ZUMBA_VIDEO":
      return {
        ...state,
        zumbaData: payload,
        zumbaLoading: false,
      };

    default:
      return state;
  }
};

export const VideoContextFun = ({ children }) => {
  const [state, dispatch] = useReducer(videoContextReducer, initialState);

    return <videoContext.Provider value={{state,videoDIspatch:dispatch}}>
        {children}
    </videoContext.Provider>;
};
export const useVideosContext = () => useContext(videoContext);
