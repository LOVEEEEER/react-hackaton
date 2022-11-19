import React, { useState } from "react";
import { ReactComponent as UnFavourite } from "../../../../assets/svg/filled-heart.svg";
import { ReactComponent as Favourite } from "../../../../assets/svg/heart.svg";
import styles from "./styles/FavouriteIcon.module.scss";
const FavouriteIcon = () => {
    const [isFavourite, setIsFavourite] = useState(false);

    return (
        <button
            onClick={() => {
                setIsFavourite((prev) => !prev);
            }}
        >
            {isFavourite ? (
                <Favourite className={styles.icon} />
            ) : (
                <UnFavourite className={styles.icon} />
            )}
        </button>
    );
};

export default FavouriteIcon;
