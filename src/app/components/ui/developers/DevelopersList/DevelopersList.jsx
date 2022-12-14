import React from "react";
import styles from "./styles/developers-list.module.scss";
import { useSelector } from "react-redux";
import DeveloperCard from "../DeveloperCard";
import { getDevelopersList } from "../../../../store/slices/developers";

const DevelopersList = () => {
    const developers = useSelector(getDevelopersList());
    if (developers) {
        return (
            <ul className={styles.main__list}>
                {developers.map((developers) => (
                    <li key={developers.id} className={styles.main__item}>
                        <DeveloperCard {...developers} />
                    </li>
                ))}
            </ul>
        );
    }
};

export default DevelopersList;
