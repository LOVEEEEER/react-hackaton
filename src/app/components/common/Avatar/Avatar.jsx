import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/avatar.module.scss";

const Avatar = ({ src, alt = "profile", size = "200", ...rest }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={styles.card__img}
            style={{ width: `${size}px`, height: `${size}px` }}
            {...rest}
        />
    );
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Avatar;
