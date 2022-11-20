import React from "react";
import bgImage from "../../../assets/images/bg-image.jpg";
import styles from "./styles/mainBgImage.module.scss";

const MainBgImage = () => {
    return (
        <div className={styles.bgImage}>
            <img src={bgImage} alt="bgImage" />
        </div>
    );
};

export default MainBgImage;
