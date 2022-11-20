import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/navbar.module.scss";
import Logo from "../Logo";
// import burgerMenuIcon from "../../../assets/svg/menu.svg";
import PhoneMenu from "../../ui/PhoneMenu/PhoneMenu";

const NavBar = () => {
    const [openMenu, setOpen] = useState(false);
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
                </nav>
            </div>
            <PhoneMenu links={navLinks} open={openMenu} />
        </header>
    );
};

export default NavBar;
