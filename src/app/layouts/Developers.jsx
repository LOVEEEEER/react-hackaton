import React from "react";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";

const Developers = () => {
    return (
        <>
            <NavBar />
            <Container>
                <BreadCrumbs />
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default Developers;
