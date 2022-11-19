import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";

const Users = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default Users;
