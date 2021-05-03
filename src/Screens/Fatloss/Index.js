import React from "react";
import FatlossBanner from "./FatlossBanner";
import FatLossProductList from "./FatLossProductList";
import "./App.css"

function Index() {
  return (
    <div style={{marginTop:"3.2rem"}}>
      <FatlossBanner />
      <FatLossProductList />
    </div>
  );
}

export default Index;
