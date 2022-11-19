import React from "react";
import UsersList from "../../ui/users/UsersList";
import styles from "./styles/main-page.module.scss";

const MainPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main__top}>
                <div className={styles.main__title}>Наша команда</div>
                <div className={styles.main__text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatum iure debitis sint dolore cupiditate voluptas
                    totam veritatis! Voluptates commodi, nobis consequatur
                    placeat doloremque laborum praesentium, eveniet deserunt
                    odio in quae.
                </div>
            </div>
            <div className={styles.main__content}>
                <UsersList />
            </div>
        </main>
    );
};

export default MainPage;
