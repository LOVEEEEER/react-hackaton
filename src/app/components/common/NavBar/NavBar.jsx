import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/navbar.module.scss";
import Logo from "../Logo";

const NavBar = () => {
    const navLinks = [
        { path: "/", name: "Команда", id: 1 },
        {
            path: "/bookmark",
            name: "Избранное",
            id: 2
        }
    ];
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Logo />
                <nav className={styles.header__nav}>
                    <ul className={styles.header__nav_list}>
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={styles.header__nav_item}
                            >
                                <NavLink
                                    className={styles.header__nav_link}
                                    to={link.path}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
