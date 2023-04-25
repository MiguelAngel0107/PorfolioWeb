import React from "react";
import Navbar from "./components/NAV_BAR";
import Navbar2 from "./components/navBar";
import Footer from "./components/footer";
export default function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
