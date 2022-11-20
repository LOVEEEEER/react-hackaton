import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/navbar.module.scss";
import Logo from "../Logo";
import Container from "../Container";

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
            <Container>
                <div className={styles.header__body}>
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
                <PhoneMenu links={navLinks} open={openMenu} />
            </Container>
        </header>
    );
};

export default NavBar;

