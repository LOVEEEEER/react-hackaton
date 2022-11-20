import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/phone-menu.module.scss";
import { NavLink } from "react-router-dom";

const PhoneMenu = ({ links, open }) => {
    return (
        <div
            className={`${styles.header__menu} ${
                open ? styles.header__menu_active : null
            }`}
        >
            <ul className={styles.header__menu_list}>
                {links.map((link) => (
                    <li key={link.id} className={styles.header__menu_item}>
                        <NavLink className={styles.header__link} to={link.path}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

PhoneMenu.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
    open: PropTypes.bool.isRequired
};

export default PhoneMenu;
