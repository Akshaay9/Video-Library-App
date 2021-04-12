import { createContext, useContext, useEffect, useReducer } from "react";
import { playListReducer } from "./PlayListReduser";

const playListContext = createContext();

const initialStateOfPlaylist = {
  playLists: localStorage.getItem("play-list")
    ? JSON.parse(localStorage.getItem("play-list"))
    : [],
};

function PlayListContextFun({ children }) {
  const [state, dispatch] = useReducer(playListReducer, initialStateOfPlaylist);
  useEffect(() => {
    localStorage.setItem(
      "play-list",
      JSON.stringify(state.playLists)
    );
  }, [state.playLists]);
  return (
    <playListContext.Provider value={{ state, playListDispatch: dispatch }}>
      {children}
    </playListContext.Provider>
  );
}

export default PlayListContextFun;

export const UsePlayListContext = () => useContext(playListContext);
