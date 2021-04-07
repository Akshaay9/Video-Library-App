import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/Index";
import NavBar from "./Screens/HomeScreen/NavBar";
import BodyBuildingScreen from "./Screens/BodyBuildingScreen/index";
import PlayListComponent from "./Components/PlayListComponent/Index";
import IndividualPlayListComponent from "./Components/IndividualPlaylistComponent/Index";
import LikedVideos from "./Components/LikedVideoComponent/Index";
import WatchLaterVideos from "./Components/WatchLaterComponent/Index";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/likedvideo" element={<LikedVideos />} />
        <Route path="/WatchLaterVideos" element={<WatchLaterVideos />} />

        <Route path="/videos/bodybuilding" element={<BodyBuildingScreen />} />
        <Route path="/playlists" element={<PlayListComponent />} />
        <Route path="/playlists/:id" element={<IndividualPlayListComponent />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
