import React from "react";
import FatlossBanner from "./FatlossBanner";
import FatLossProductList from "./FatLossProductList";

function Index() {
  return (
    <div style={{marginTop:"3.2rem"}}>
      <FatlossBanner />
      <FatLossProductList />
    </div>
  );
}

export default Index;
