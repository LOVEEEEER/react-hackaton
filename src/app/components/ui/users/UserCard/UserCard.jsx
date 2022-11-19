import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/user-card.module.scss";
import { useNavigate } from "react-router-dom";

// import imageTest from "../../../../assets/images/bg-image.jpg";

const UserCard = ({ name, id, image }) => {
    const navigate = useNavigate();
    const toggleUserPage = (userId) => {
        navigate(`users/${userId}`);
    };
    return (
        <div className={styles.main__user} onClick={() => toggleUserPage(id)}>
            <div className={styles.main__user_image}>
                <img src={image} alt="user-photo" />
            </div>
            <div className={styles.main__user_name}>{name}</div>
        </div>
    );
};

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default UserCard;
