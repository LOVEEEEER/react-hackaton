import React from "react";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../components/common/breadCrumbs/breadCrumbs";
import Container from "../components/common/Container";
import NavBar from "../components/common/NavBar";

const Login = () => {
    return (
        <>
            <NavBar />

            <Container>
                <BreadCrumb />
                <Outlet />
            </Container>
        </>
    );
};

export default Login;
