import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../../store/slices/auth";
import { getFavourites } from "../../../store/slices/favourites";
import FavouritesList from "../../ui/favourites/FavouriteList";

const FavouritesPage = () => {
    const navigate = useNavigate();
    const favourites = useSelector(getFavourites);
    const isLoggedin = useSelector(getIsLoggedIn());
    const containerStyles = {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "70vh",
        alignItems: "center"
    };
    const goBack = () => {
        navigate(-1);
    };
    return (
        <div>
            <button
                onClick={goBack}
                style={{
                    color: "#eee",
                    margin: "10px 10px",
                    backgroundColor: "gray",
                    padding: "5px 10px",
                    borderRadius: "10px"
                }}
            >
                go back
            </button>
            {!isLoggedin && (
                <div style={containerStyles}>
                    <h1>избранное доступно для авторизованных пользователей</h1>
                </div>
            )}
            {isLoggedin && favourites.length ? (
                <div style={{ fontSize: "25px" }}>
                    <h1
                        style={{
                            margin: "20px auto",
                            textAlign: "center",
                            padding: "10px",
                            backgroundColor: "#61dafb",
                            color: "black",
                            width: "40%",
                            borderRadius: "10px"
                        }}
                    >
                        избранное:
                    </h1>
                    <FavouritesList favourites={favourites} />
                </div>
            ) : isLoggedin ? (
                <div style={containerStyles}>
                    <h1>ничего не добавлено в избранное</h1>
                </div>
            ) : null}
        </div>
    );
};

export default FavouritesPage;
