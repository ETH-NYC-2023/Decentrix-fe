import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import dynamic from "next/dynamic";


const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
