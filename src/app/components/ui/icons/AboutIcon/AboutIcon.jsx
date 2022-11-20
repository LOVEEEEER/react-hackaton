import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as About } from "../../../../assets/svg/about.svg";
const AboutIcon = ({ handleClick }) => {
    return (
        <button onClick={handleClick}>
            <About
                style={{
                    width: "40px",
                    height: "40px",
                    cursor: "pointer"
                }}
            />
        </button>
    );
};
AboutIcon.propTypes = {
    handleClick: PropTypes.func
};

export default AboutIcon;
