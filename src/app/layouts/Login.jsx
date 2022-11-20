import React from "react";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Container from "../components/common/Container";
import NavBar from "../components/common/NavBar";

const Login = () => {
    return (
        <>
            <NavBar />

            <Container>
                <BreadCrumbs />
                <Outlet />
            </Container>
        </>
    );
};

export default Login;
