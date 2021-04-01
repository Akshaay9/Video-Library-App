import React from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen/Index";
import NavBar from "./Screens/HomeScreen/NavBar";
import BodyBuildingScreen from "./Screens/BodyBuildingScreen/index"
function App() {
  return (
    <>
      {/* Nav Bar */}
      <NavBar />

      {/* Home screen */}
      {/* <HomeScreen /> */}

      {/* BodyBuilding Screen */}
      <BodyBuildingScreen/>


      
    </>
  );
}

export default App;
