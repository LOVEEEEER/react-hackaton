import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles/navbar.module.scss";
import Logo from "../Logo";
import PhoneMenu from "../../ui/PhoneMenu/PhoneMenu";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, logout } from "../../../store/slices/auth";
import Avatar from "../Avatar";
import Button from "../Button";
import Container from "../Container";
import logoutIcon from "../../../assets/svg/logout.svg";

const NavBar = () => {
    const [openMenu, setOpen] = useState(false);
    const currentUser = useSelector(getCurrentUser());
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navLinks = [
        { path: "/", name: "Команда", id: 1 },
        {
            path: "/bookmark",
            name: "Избранное",
            id: 2
        }
    ];

    const handleButton = () => {
        if (!currentUser) navigate("/login/signin");
        else dispatch(logout());
    };

    const handleOpenMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <header className={styles.header}>
            <Container>
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
                    </div>
                    <div className={styles.header__right}>
                        {currentUser && (
                            <Avatar src={currentUser.image} size="45" />
                        )}
                        <div className={styles.header__logButton}>
                            <Button onClick={handleButton}>
                                {!currentUser ? (
                                    "Вход"
                                ) : (
                                    <img src={logoutIcon} alt="logout" />
                                )}
                            </Button>
                        </div>
                        <div className={styles.header__iconMenu}>
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
                    </div>
                </div>

                <PhoneMenu links={navLinks} open={openMenu} />
            </Container>
        </header>
    );
};

export default NavBar;
