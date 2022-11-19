import React from "react";
import PropTypes from "prop-types";

const Badge = ({ color, content }) => {
    return <span className={"badge" + color}>{content}</span>;
};
Badge.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Badge;
