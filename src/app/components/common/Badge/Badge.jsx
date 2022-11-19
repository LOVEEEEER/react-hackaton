import React from "react";
import PropTypes from "prop-types";
import "./styles/badge.scss";

const Badge = ({ color, name }) => {
    const getQualityColor = (color) => {
        switch (color) {
            case "red":
                return "rgb(245, 91, 91)";
            case "green":
                return "rgb(122, 231, 114)";
            case "purple":
                return "rgb(192, 58, 194)";
            default:
                break;
        }
    };
    return (
        <span
            className={"badge " + color}
            style={{ backgroundColor: getQualityColor(color) }}
        >
            {name}
        </span>
    );
};
Badge.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Badge;
