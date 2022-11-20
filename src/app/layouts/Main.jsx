import React from "react";
import Navbar from "../components/common/NavBar/NavBar";
import MainPage from "../components/pages/MainPage";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import BreadCrumb from "../components/common/breadCrumbs/breadCrumbs";

const Main = () => {
    return (
        <>
            <Navbar />

            <Container>
                <BreadCrumb />
                <MainPage />
            </Container>
            <Footer />
        </>
    );
};

export default Main;
