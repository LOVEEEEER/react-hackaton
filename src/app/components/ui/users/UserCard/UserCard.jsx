import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/user-card.module.scss";
import { useNavigate } from "react-router-dom";
import FavouriteIcon from "../../icons/FavouriteIcon/FavouriteIcon";
import AboutIcon from "../../icons/AboutIcon/AboutIcon";
import { trueAgeWord } from "../../../../utils/trueAgeWord";
const UserCard = ({ name, id, image, age, description }) => {
    const navigate = useNavigate();
    const handleClickAboutButton = () => {
        navigate(`users/${id}`);
    };
    const trueWord = trueAgeWord(age);
    return (
        <div className={styles.card__container}>
            <div className={styles.card__img__container}>
                <img src={image} alt={name} className={styles.card__img} />
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__content__name}>{name}</div>
                <div className={styles.card__content__age}>
                    {age || 0} {trueWord}
                </div>
                <div className={styles.card__content__description}>
                    {description}
                </div>
                <div className={styles.card__content__buttons}>
                    <FavouriteIcon />
                    <AboutIcon handleClick={handleClickAboutButton} />
                </div>
            </div>
        </div>
    );
};

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    age: PropTypes.number,
    description: PropTypes.string
};

export default UserCard;
