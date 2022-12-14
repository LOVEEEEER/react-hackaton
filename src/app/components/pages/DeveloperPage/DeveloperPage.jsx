import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getIsLoggedIn } from "../../../store/slices/auth";
import { getDeveloperById } from "../../../store/slices/developers";
import { getQualitiesListById } from "../../../store/slices/qualities";
import Badge from "../../common/Badge/Badge";
import ImageSlider from "../../common/ImageSlider";
import ProgressBar from "../../common/ProgressBar/ProgressBar";
import ReviewsForm from "../../ui/forms/ReviewsForm";
import ReviewsList from "../../ui/reviews/ReviewsList";
import SocialNetworksList from "../../ui/SocialNetworksList";
import styles from "./styles/developer-page.module.scss";

const DeveloperPage = () => {
    const { developerId } = useParams();
    const developer = useSelector(getDeveloperById(developerId));
    const isLoggedIn = useSelector(getIsLoggedIn());
    const qualities = useSelector(getQualitiesListById(developer.qualities));
    if (developer && qualities) {
        return (
            <main className={styles.developer__page}>
                <div className={styles.developer__main_info}>
                    <div className={styles.developer__cover_block}>
                        <h2 className={styles.developer__name}>
                            {developer.name}
                        </h2>
                        <img
                            className={styles.developer__image}
                            src={developer.image}
                            alt={developer.name}
                        />
                        <ul className={styles.developer__qualities_list}>
                            {qualities.map((qual) => (
                                <li
                                    key={qual.id}
                                    className={styles.developer__quality}
                                >
                                    <Badge {...qual} />
                                </li>
                            ))}
                        </ul>
                        <SocialNetworksList items={developer.social} />
                    </div>
                    <div className={styles.developer__info}>
                        <h3 className={styles.developer__info_title}>
                            ??????????????
                        </h3>
                        <p className={styles.developer__description}>
                            {developer.age}
                        </p>
                        <h3 className={styles.developer__info_title}>
                            ????????????????
                        </h3>
                        <p className={styles.developer__description}>
                            {developer.description}
                        </p>
                        <h3 className={styles.developer__info_title}>
                            ?????????????? ?? ??????????????
                        </h3>
                        <p className={styles.developer__description}>
                            {developer.workedOn}
                        </p>

                        <ProgressBar progress={developer.react} text="React" />
                        <ProgressBar
                            progress={developer.javaScript}
                            text="JavaScript"
                        />
                        <ProgressBar progress={developer.scss} text="SCSS" />
                    </div>
                </div>
                <div className={styles.developer__slider}>
                    <h2 className={styles.developer__projects_title}>
                        ?????????????? ??????????????????
                    </h2>
                    {developer.projects && (
                        <ImageSlider
                            className={styles.developer__image_slider}
                            items={developer.projects}
                        />
                    )}
                </div>
                <h2
                    className={`${styles.developer__projects_title} ${styles.developer__reviews_title}`}
                >
                    ???????????? ?? ????????????????????????
                </h2>
                <div className={styles.developer__reviews}>
                    <ReviewsList />
                </div>
                {isLoggedIn ? (
                    <ReviewsForm />
                ) : (
                    <div>
                        ?????????? ?????????????????? ???????????? ????????????????????{" "}
                        <Link
                            to="/login/signin"
                            className={styles.developer__helper_text}
                        >
                            ?????????? ?? ??????????????
                        </Link>
                    </div>
                )}
            </main>
        );
    }
};

export default DeveloperPage;
