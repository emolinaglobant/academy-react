import React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <>
      <Navbar as="header" position="fixed" />
      <Box p="5">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
