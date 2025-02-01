// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/Index";
import NavBar from "./Screens/HomeScreen/NavBar";
import BodyBuildingScreen from "./Screens/BodyBuildingScreen/index";
import FatLoss from "./Screens/Fatloss/Index";
import Calisthetic from "./Screens/Calisthetics/Index";
import Yoga from "./Screens/Yoga/Index";
import Zoomba from "./Screens/Zoomba/Index";
import PlayListComponent from "./Components/PlayListComponent/Index";
import IndividualPlayListComponent from "./Components/IndividualPlaylistComponent/Index";
import LikedVideos from "./Components/LikedVideoComponent/Index";
import WatchLaterVideos from "./Components/WatchLaterComponent/Index";
import IndividualVideosOfPlayList from "./Components/IndividualVideoFromPlayList/Index";
import IndividualVideo from "./Components/individualVideo/Index";
import Login from "./Components/UserAccount/Login";
import SignUp from "./Components/UserAccount/SignUp";
import Toast from "./Components/ToastComponent/Toast";
import { useLikedVideoContext } from "./Context/LikedVideoContext/LikedVideoContext";
import { useWatchLaterContext } from "./Context/WatchLaterVideoContext/WatchLaterVideoContext";
import { UsePlayListContext } from "./Context/PlaylistContext/PlayListContext";
import { useLoginContext } from "./Context/loginRegistrationContext/loginRegistrationContext";
import { loadInitailUsersProduct } from "./UtilityFunctions/LoadInitialCOmponents";
import PrivateRoute from "./PrivateRoute";
import { BE_URL } from "./const";

function App() {
  const [navModal, setNavModal] = useState(false);
  const { likedVideoDispatch } = useLikedVideoContext();
  const { watchLaterDispatch } = useWatchLaterContext();
  const { playListDispatch } = UsePlayListContext();
  const {
    state: { userInfo },
  } = useLoginContext();

  useEffect(() => {
    if (userInfo.token) {
      loadInitailUsersProduct(
        userInfo,
        likedVideoDispatch,
        watchLaterDispatch,
        playListDispatch
      );
    }
  }, [userInfo]);

  useEffect(() => {
    (async () => {
      await axios.get(`${BE_URL}/`);
    })();
  }, []);

  return (
    <div style={navModal ? { height: "99vh", overflow: "hidden" } : {}}>
      <BrowserRouter>
        <NavBar navModal={navModal} setNavModal={setNavModal} />
        <Toast />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/video/:id" element={<IndividualVideo />} />
          <Route path="/likedvideo" element={<LikedVideos />} />
          <Route path="/WatchLaterVideos" element={<WatchLaterVideos />} />
          <Route path="/playlists" element={<PlayListComponent />} />

          {/* Protected routes */}
          <Route
            path="/playlists/:playListid"
            element={<PrivateRoute element={<IndividualPlayListComponent />} />}
          />
          <Route
            path="/playlists/:playListid/:videoid"
            element={<PrivateRoute element={<IndividualVideosOfPlayList />} />}
          />

          {/* video pages */}
          <Route path="/videos/bodybuilding" element={<BodyBuildingScreen />} />
          <Route path="/videos/fatloss" element={<FatLoss />} />
          <Route path="/videos/calisthetic" element={<Calisthetic />} />
          <Route path="/videos/yoga" element={<Yoga />} />
          <Route path="/videos/zoomba" element={<Zoomba />} />

          {/* user account */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
