import React, { useState } from "react";
import Container from "../../common/Container";
import TextField from "../../common/forms/textField";
import styles from "./login.module.scss";

const Login = () => {
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const handleChange = (target) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <div className={styles.login}>
            <Container>
                <div className={styles.login__body}>
                    <div className={styles.login__content}>
                        <div className={styles.login__left}>
                            <div className={styles.left}>
                                <div className={styles.left__logo}>Logo</div>
                                <div className={styles.left__title}>
                                    Start your progress
                                </div>
                                <div className={styles.left__text}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Fuga, necessitatibus.
                                </div>
                                <div className={styles.left__card}>
                                    Контент карточки
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.right__title}>SigUp</div>
                            <form className="login" onSubmit={handleSubmit}>
                                <div className={styles.right__name}>
                                    <TextField
                                        label="Введите имя"
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        placeholder=" "
                                    />
                                </div>
                                <div className={styles.right__email}>
                                    <TextField
                                        label="Введите email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        placeholder=" "
                                    />
                                </div>
                                <div className={styles.right__password}>
                                    <TextField
                                        label="Введите пароль"
                                        name="password"
                                        type="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        placeholder=" "
                                    />
                                </div>
                                <button className={styles.button}>
                                    <span>Войти</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;
