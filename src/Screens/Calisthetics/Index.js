import React from "react";
import Footer from "../../Components/FooterComponent/Footer";
import CalistheticProductLists from "./CalistheticProductLists";
import CalstheticBanner from "./CalstheticBanner";

function Index() {
  return (
    <div style={{ marginTop: "3.2rem" }}>
      <CalstheticBanner />
      <CalistheticProductLists />
      <Footer/>
    </div>
  );
}

export default Index;
