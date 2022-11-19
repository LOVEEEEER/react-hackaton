import React from "react";
import styles from "./styles/logo.module.scss";
import reactIcon from "../../../assets/svg/react.svg";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={reactIcon} alt="logo" className={styles.logo_image} />
            <h2 className={styles.logo_text_block}>
                <span className={styles.logo_text_additional}>React </span>
                Hackaton
            </h2>
        </div>
    );
};

export default Logo;
