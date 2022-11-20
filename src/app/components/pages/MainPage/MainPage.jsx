import React from "react";
import Divider from "../../common/Divider";
import DevelopersList from "../../ui/developers/DevelopersList";
import styles from "./styles/main-page.module.scss";

const MainPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main__top}>
                <div className={styles.main__title}>О команде</div>
                <div className={styles.main__text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatum iure debitis sint dolore cupiditate voluptas
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet corrupti dolor porro at ut eligendi ab fugiat
                    corporis architecto qui exercitationem totam eos tenetur,
                    laudantium dolores dolorem numquam ullam pariatur.
                    <Divider />
                </div>
            </div>

            <div className={styles.main__content}>
                <div className={styles.main__content_title}>
                    Наши разработчики
                </div>
                <DevelopersList />
            </div>
        </main>
    );
};

export default MainPage;
