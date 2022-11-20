import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDeveloperById } from "../../../../store/slices/developers";
import FavouriteIcon from "../../icons/FavouriteIcon/FavouriteIcon";

const FavouriteItem = ({ devId }) => {
    const navigate = useNavigate();
    const developer = useSelector(getDeveloperById(devId));
    const handleClick = () => {
        navigate(`/developers/${devId}`);
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end"
            }}
        >
            <div
                style={{
                    cursor: "pointer",
                    margin: "15px auto",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    columnGap: "50px",
                    alignItems: "center",
                    width: "40%",
                    borderBottom: "1px dashed black"
                }}
            >
                <h3
                    style={{
                        padding: "10px",
                        backgroundColor: "lightgrey",
                        borderRadius: "10px"
                    }}
                    onClick={handleClick}
                    to={`developers/${devId}`}
                >
                    {developer.name}
                </h3>
                <FavouriteIcon id={devId} />
            </div>
        </div>
    );
};

FavouriteItem.propTypes = {
    devId: PropTypes.string
};

export default FavouriteItem;
