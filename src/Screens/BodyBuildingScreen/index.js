import React from "react";
import BodyBuildingScreenBanner from "./BodyBuildingScreenBanner";
import BodyBuildingScreenProductList from "./BodyBuildingScreenProductList";
import "./BodyBuilding.css";

function index() {
  return (
    <div style={{ marginTop: "3.2rem" }}>
      <BodyBuildingScreenBanner />
      <BodyBuildingScreenProductList />
    </div>
  );
}

export default index;
