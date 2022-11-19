import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.scss";

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <div className={styles.navbar__body}>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link to="/" className={styles.navbar__link}>
                                Главная
                            </Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/" className={styles.navbar__link}>
                                Ссылка 1
                            </Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link to="/" className={styles.navbar__link}>
                                Ссылка 2
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
