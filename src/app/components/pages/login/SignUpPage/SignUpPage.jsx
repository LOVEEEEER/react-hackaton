import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../common/Logo";
import SignUpForm from "../../../ui/forms/login/SignUpForm";
import styles from "../styles/login.module.scss";

const SignUpPage = () => {
    return (
        <>
            <div className={styles.login__left}>
                <div className={styles.left}>
                    <div className={styles.left__logo}>
                        <Logo />
                    </div>
                    <div className={styles.left__title}>
                        Начните развиваться в IT вместе с нами!
                    </div>
                    <div className={styles.left__text}>
                        Быть айтишником - это уметь решать жизненные задачи
                        нестандартным путём
                    </div>
                    <div className={styles.left__card}>
                        «Необходим новый тип мышления, если человечество хочет
                        выжить и продвигаться в развитии» — Альберт Энштейн.
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.right__title}>Создание аккаунта</div>
                <p className={styles.right__pretitle}>
                    Уже есть аккаунт? <Link to="/login/signin">Войти</Link>
                </p>
                <SignUpForm />
            </div>
        </>
    );
};

export default SignUpPage;
