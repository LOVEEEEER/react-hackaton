import React, { useState } from "react";
import PropTypes from "prop-types";
const ProgressBar = ({ progress = "", text = "" }) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const style = {
            opacity: 1,
            width: `${progress}%`
        };

        setStyle(style);
    }, 200);
    return (
        <>
            <div className="progress-text">{text}</div>
            <div className="progress">
                <span className="progress-done" style={style}>
                    {progress} %
                </span>
            </div>
        </>
    );
};

ProgressBar.propTypes = {
    progress: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default ProgressBar;
