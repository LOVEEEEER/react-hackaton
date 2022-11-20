import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles/progress-bar.module.scss";

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
            <div className={styles.progress_text}>{text}</div>
            <div className={styles.progress}>
                <span className={styles.progress_done} style={style}>
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
