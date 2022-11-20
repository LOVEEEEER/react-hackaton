import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/common/Container";
import NavBar from "../components/common/NavBar";

const Login = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};

export default Login;
