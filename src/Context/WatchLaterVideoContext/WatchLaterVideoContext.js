import { createContext, useContext, useEffect, useReducer } from "react";
const WatchLaterVideoContext = createContext();

const initialState = {
  watchLaterVideo: [],
  loading: true,
};

const WatchLaterVideoReducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "ADD_TO_WATCH_VIDEOS":
      const date = new Date();
      return {
        ...state,
        watchLaterVideo: [
          ...state.watchLaterVideo,
          {
            ...payload,
            addedOn: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
          },
        ],
      };
    case "REMOVE_FROM_WATCH_VIDEOS":
      return {
        ...state,
        watchLaterVideo: state.watchLaterVideo.filter(
          (ele) => ele.id * 1 !== payload * 1
        ),
      };

    default:
      return state;
  }
};

export const WatchLaterVideoContextFun = ({ children }) => {
  const [state, dispatch] = useReducer(WatchLaterVideoReducer, initialState);

  return (
    <WatchLaterVideoContext.Provider
      value={{ state, watchLaterDispatch: dispatch }}
    >
      {children}
    </WatchLaterVideoContext.Provider>
  );
};
export const useWatchLaterContext = () => useContext(WatchLaterVideoContext);
