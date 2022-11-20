import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDeveloperById } from "../../../store/slices/developers";
import { getQualitiesListById } from "../../../store/slices/qualities";
import Badge from "../../common/Badge/Badge";
import ImageSlider from "../../common/ImageSlider";
import ProgressBar from "../../common/ProgressBar/ProgressBar";
import SocialNetworksList from "../../ui/SocialNetworksList";
import styles from "./styles/developer-page.module.scss";

const DeveloperPage = () => {
    const { developerId } = useParams();
    const developer = useSelector(getDeveloperById(developerId));
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
                            About me
                        </h3>
                        <p className={styles.developer__description}>
                            {developer.description}
                        </p>
                        <h3 className={styles.developer__info_title}>
                            Project work
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
                        Проекты участника
                    </h2>
                    {developer.projects && (
                        <ImageSlider
                            className={styles.developer__image_slider}
                            items={developer.projects}
                        />
                    )}
                </div>
            </main>
        );
    }
};

export default DeveloperPage;
