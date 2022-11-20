import React from "react";
import Navbar from "../components/common/NavBar/NavBar";
import MainPage from "../components/pages/MainPage";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import BreadCrumbs from "../components/common/BreadCrumbs";

const Main = () => {
    return (
        <>
            <Navbar />
            <Container>
                <BreadCrumbs />
                <MainPage />
            </Container>
            <Footer />
        </>
    );
};

export default Main;
