import React from "react";
import bgImage from "../../../assets/images/bgImage.jpg";
import styles from "./mainBgImage.module.scss";

const MainBgImage = () => {
    return (
        <div className={styles.bgImage}>
            <img src={bgImage} alt="bgImage" />
        </div>
    );
};

export default MainBgImage;
