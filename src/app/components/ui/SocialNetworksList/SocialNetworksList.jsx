import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/social-networks.module.scss";
import vkIcon from "../../../assets/svg/vk.svg";
import telegramIcon from "../../../assets/svg/telegram.svg";
import instagramIcon from "../../../assets/svg/instagram.svg";
import gitHubIcon from "../../../assets/svg/github.svg";

const SocialNetworksList = ({ items }) => {
    const getNetworkIcon = (network) => {
        switch (network) {
            case "vk":
                return vkIcon;
            case "telegram":
                return telegramIcon;
            case "instagram":
                return instagramIcon;
            case "gitHub":
                return gitHubIcon;
            default:
                return null;
        }
    };
    return (
        <ul className={styles.social__network_list}>
            {Object.keys(items).map((item) => (
                <li key={item}>
                    <a href={items[item]} target="_blank" rel="noreferrer">
                        <img
                            src={getNetworkIcon(item)}
                            alt={item}
                            className={styles.social__network}
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
};

SocialNetworksList.propTypes = {
    items: PropTypes.object.isRequired
};

export default SocialNetworksList;
