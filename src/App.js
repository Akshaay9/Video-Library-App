import React from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen/Index";
import NavBar from "./Screens/HomeScreen/NavBar";
import BodyBuildingScreen from "./Screens/BodyBuildingScreen/index";
import { useRoutingContext } from "./Context/RouteContext/RotingContextProvider";
import PlayListComponent from "./Components/PlayListComponent/Index"
function App() {
  const { route, setRoute } = useRoutingContext();
  return (
    <>
      {/* Nav Bar */}
      <NavBar />

      {/* Home screen */}
      {route === "HomeScreenComponents" && <HomeScreen />}

      {/* BodyBuilding Screen */}
      {route === "bodyBuilding" && <BodyBuildingScreen />}

      {/* PlayList Screen */}
      {route === "playList" && <PlayListComponent />}
    </>
  );
}

export default App;
