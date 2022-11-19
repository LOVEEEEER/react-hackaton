import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/user-card.module.scss";
import { useNavigate } from "react-router-dom";

const UserCard = ({ name, id, image }) => {
    const navigate = useNavigate();
    const toggleUserPage = (userId) => {
        navigate(`users/${userId}`);
    };
    return (
        <div className={styles.main__user} onClick={() => toggleUserPage(id)}>
            {name}
        </div>
    );
};

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default UserCard;
