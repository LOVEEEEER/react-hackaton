import React from "react";
import { Link } from "react-router-dom";
import MainBgImage from "../../components/bgImage/mainBgImage";
import Container from "../../components/container/container";
import styles from "./main.module.scss";

const Main = () => {
    return (
        <main className={styles.main}>
            <Container>
                <div className={styles.main__top}>
                    <div className={styles.main__title}>Наша команда</div>
                    <div className={styles.main__text}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptatum iure debitis sint dolore cupiditate
                        voluptas totam veritatis! Voluptates commodi, nobis
                        consequatur placeat doloremque laborum praesentium,
                        eveniet deserunt odio in quae.
                    </div>
                </div>
                <div className={styles.main__content}>
                    <div className={styles.main__columns}>
                        <Link to="/" className={styles.main__column}>
                            <div className={styles.main__item}>
                                Карточка человека
                            </div>
                        </Link>
                        <Link to="/" className={styles.main__column}>
                            <div className={styles.main__item}>
                                Карточка человека
                            </div>
                        </Link>
                        <Link to="/" className={styles.main__column}>
                            <div className={styles.main__item}>
                                Карточка человека
                            </div>
                        </Link>
                        <Link to="/" className={styles.main__column}>
                            <div className={styles.main__item}>
                                Карточка человека
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
            <MainBgImage />
        </main>
    );
};

export default Main;
