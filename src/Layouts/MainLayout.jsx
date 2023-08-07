import React, { useEffect, useState } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import ScrollToTop from "../../ScrollToTop";
import { PulseLoader } from "react-spinners";
import Offer from "../components/Offer/Offer";

const MainLayout = () => {
  const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);

  return (
    <>
      {reactLoading ? (
        <PulseLoader className="text-center mt-96 bg-transparent" color="#36d7b7" />
      ) : (
        <div className=" mx-auto">
          <ScrollToTop></ScrollToTop>
          <Offer />
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default MainLayout;