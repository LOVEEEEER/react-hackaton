import React from "react";
import Logo from "../Logo";
import styles from "./styles/footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo />
        </footer>
    );
};

export default Footer;
