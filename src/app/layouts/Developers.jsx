import React from "react";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../components/common/breadCrumbs/breadCrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";

const Developers = () => {
    return (
        <>
            <NavBar />
            <Container>
                <BreadCrumb />
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default Developers;
