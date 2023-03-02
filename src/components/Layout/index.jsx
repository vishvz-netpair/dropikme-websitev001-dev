import React from "react";
import { Outlet } from "react-router-dom";
import Navbar4 from "../Navbar4/Navbar4";
import Logo from "../../images/logo-2.png";
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";

const Layout = () => {
  return (
    <>
      <Navbar4 Logo={Logo} />
      <Outlet />
      <Footer />
      <Scrollbar />
    </>
  );
};

export default Layout;
