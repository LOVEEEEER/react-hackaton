import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import NavBar from "../components/common/NavBar";
import Container from "../components/common/Container";
import FavouritesPage from "../components/pages/FavouritesPage";

const Favourites = () => {
    return (
        <>
            <NavBar />
            <Container>
                <BreadCrumbs />
                <FavouritesPage />
            </Container>
        </>
    );
};

export default Favourites;
