import React from "react";
import PropTypes from "prop-types";
import FavouriteItem from "../FavouriteItem";

const FavouritesList = ({ favourites }) => {
    return (
        <ul style={{ marginTop: "50px" }}>
            {favourites.map((fav) => (
                <li key={fav.id}>
                    <FavouriteItem devId={fav.personId} />
                </li>
            ))}
        </ul>
    );
};

FavouritesList.propTypes = {
    favourites: PropTypes.array.isRequired
};

export default FavouritesList;
