import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { ReactComponent as UnFavourite } from "../../../../assets/svg/filled-heart.svg";
import { ReactComponent as Favourite } from "../../../../assets/svg/heart.svg";
import {
    createFavourite,
    getCurrentUserFavourite,
    removeFavourite
} from "../../../../store/slices/favourites";
import { getRandomId } from "../../../../utils/getRandomId";
import styles from "./styles/FavouriteIcon.module.scss";
import { getAuthUserId } from "../../../../store/slices/auth";
const FavouriteIcon = ({ id }) => {
    const userId = useSelector(getAuthUserId());
    const dispatch = useDispatch();
    const currentFavouriteId = useSelector(getCurrentUserFavourite(id))?.id;
    const currentFavouriteBool = !!currentFavouriteId;
    const [isFavourite, setIsFavourite] = useState(currentFavouriteBool);

    return (
        <button
            disabled={!userId}
            onClick={() => {
                if (isFavourite) {
                    dispatch(removeFavourite(currentFavouriteId));
                } else {
                    dispatch(
                        createFavourite({
                            personId: id,
                            id: getRandomId(),
                            userId
                        })
                    );
                }
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
FavouriteIcon.propTypes = {
    id: PropTypes.string
};
export default FavouriteIcon;
