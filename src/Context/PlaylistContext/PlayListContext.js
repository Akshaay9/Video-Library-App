import { createContext, useContext, useReducer } from "react";
import { playListReducer } from "./PlayListReduser";

const playListContext = createContext();

const initialStateOfPlaylist = {
    playLists: localStorage.getItem("play-list") ? JSON.parse(localStorage.getItem("play-list")) : [],
    loading:false
}

function PlayListContextFun({ children }) {
    const [state, dispatch] = useReducer(playListReducer, initialStateOfPlaylist)
    return <playListContext.Provider value={{state,playListDispatch:dispatch}}>
        {children}
    </playListContext.Provider>;
}

export default PlayListContextFun;

export const UsePlayListContext = () => useContext(playListContext);
