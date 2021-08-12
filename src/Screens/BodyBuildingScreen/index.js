import React from "react";
import BodyBuildingScreenBanner from "./BodyBuildingScreenBanner";
import BodyBuildingScreenProductList from "./BodyBuildingScreenProductList";
import "./BodyBuilding.css";
import Footer from "../../Components/FooterComponent/Footer";

function index() {
  return (
    <div style={{ marginTop: "3.2rem" }}>
      <BodyBuildingScreenBanner />
      <BodyBuildingScreenProductList />
      <Footer/>
    </div>
  );
}

export default index;
