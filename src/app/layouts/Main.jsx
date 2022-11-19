import React from "react";
import Navbar from "../components/common/NavBar/NavBar";
import MainPage from "../components/pages/MainPage";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <Container>
                <MainPage />
            </Container>
            <Footer />
        </>
    );
};

export default Main;
