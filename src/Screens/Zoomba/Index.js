import React from "react";
import Footer from "../../Components/FooterComponent/Footer";
import ZoombaBanner from "./ZoombaBanner";
import ZoombaProductList from "./ZoombaProductList";

function Index() {
  return (
    <div style={{ marginTop: "3.2rem" }}>
      <ZoombaBanner />
      <ZoombaProductList />
      <Footer/>
    </div>
  );
}

export default Index;
