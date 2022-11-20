import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQualitiesListById } from "../../../store/slices/qualities";
import { getUserById } from "../../../store/slices/users";
import Badge from "../../common/Badge/Badge";
import Container from "../../common/Container/Container";
import ImageSlider from "../../common/ImageSlider";
import styles from "./styles/user-page.module.scss";

const UserPage = () => {
    const { userId } = useParams();
    const user = useSelector(getUserById(userId));
    const qualities = useSelector(getQualitiesListById(user.qualities));
    if (user && qualities) {
        return (
            <main className={styles.user__page}>
                <Container>
                    <div className={styles.user__main_info}>
                        <div className={styles.user__cover_block}>
                            <h2 className={styles.user__name}>{user.name}</h2>
                            <div className={styles.user__image}>
                                <img src={user.image} alt={user.name} />
                            </div>
                            <ul className={styles.user__qualities_list}>
                                {qualities.map((qual) => (
                                    <li
                                        key={qual.id}
                                        className={styles.user__quality}
                                    >
                                        <Badge {...qual} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.user__info}>
                            <h3 className={styles.user__info_title}>About</h3>
                            <p className={styles.user__description}>
                                {user.description}
                            </p>
                        </div>
                    </div>
                    <div className={styles.user__slider}>
                        <h2 className={styles.user__projects_title}>
                            Проекты участника
                        </h2>
                        {user.projects && (
                            <ImageSlider
                                className={styles.user__image_slider}
                                items={user.projects}
                            />
                        )}
                    </div>
                </Container>
            </main>
        );
    }
};

export default UserPage;
