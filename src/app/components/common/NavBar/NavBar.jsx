import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles/navbar.module.scss";
import Logo from "../Logo";
import PhoneMenu from "../../ui/PhoneMenu/PhoneMenu";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../../store/slices/auth";
import Avatar from "../Avatar";
import Button from "../Button";

const NavBar = () => {
    const [openMenu, setOpen] = useState(false);
    const currentUser = useSelector(getCurrentUser());
    const navigate = useNavigate();

    const navLinks = [
        { path: "/", name: "Команда", id: 1 },
        {
            path: "/bookmark",
            name: "Избранное",
            id: 2
        }
    ];

    const handleOpenMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Logo />
                <div className={styles.header__nav}>
                    <ul className={styles.header__nav_list}>
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={styles.header__nav_item}
                            >
                                <NavLink
                                    className={({ isActive }) =>
                                        `${styles.header__nav_link} ${
                                            isActive
                                                ? styles.header__nav_link_active
                                                : ""
                                        }`
                                    }
                                    to={link.path}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <input
                        id="menu__toggle"
                        className={styles.header__menu_toggle}
                        type="checkbox"
                        onClick={handleOpenMenu}
                    />
                    <label
                        className={styles.header__menu_button}
                        htmlFor="menu__toggle"
                    >
                        <span></span>
                    </label>
                </div>
                {!currentUser ? (
                    <Button onClick={() => navigate("/login/signin")}>
                        Вход
                    </Button>
                ) : (
                    <Avatar src={currentUser.image} size="45" />
                )}
            </div>

            <PhoneMenu links={navLinks} open={openMenu} />
        </header>
    );
};

export default NavBar;
