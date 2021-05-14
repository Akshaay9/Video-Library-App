import { createContext, useContext, useEffect, useReducer } from "react";
const WatchLaterVideoContext = createContext();

const initialState = {
  watchLaterVideo: [],
  loading: true,
};

const WatchLaterVideoReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOAD_WATCH_LATER":
      return {
        ...state,
        watchLaterVideo: payload,
      };
    case "CLEAR_WATCH_LATER":
      return {
        ...state,
        watchLaterVideo: [],
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
