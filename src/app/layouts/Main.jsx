import React from "react";
import Navbar from "../components/common/NavBar/NavBar";
import MainPage from "../components/pages/MainPage";
import Container from "../components/common/Container";

const Main = () => {
    return (
        <>
            <Navbar />
            <Container>
                <MainPage />
            </Container>
        </>
    );
};

export default Main;
