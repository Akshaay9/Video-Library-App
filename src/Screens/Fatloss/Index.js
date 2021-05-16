import React from "react";
import FatlossBanner from "./FatlossBanner";
import FatLossProductList from "./FatLossProductList";
import "./App.css"
import Footer from "../../Components/FooterComponent/Footer";

function Index() {
  return (
    <div style={{marginTop:"3.2rem"}}>
      <FatlossBanner />
      <FatLossProductList />
      <Footer/>
    </div>
  );
}

export default Index;
