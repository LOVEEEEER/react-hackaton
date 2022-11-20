import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";

const Users = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Users;
