import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/review.module.scss";
import { useSelector } from "react-redux";
import { getUserById } from "../../../../store/slices/auth";
import Avatar from "../../../common/Avatar";
import { displayDate } from "../../../../utils/dateService";

const Review = ({ review }) => {
    const authorComment = useSelector(getUserById(review.userId));
    return (
        <li className={styles.review}>
            <div className={styles.review_user}>
                <Avatar src={authorComment.image} size={30} />
                <h3 className={styles.review__author}>{authorComment.name}</h3>
                <span className={styles.review__date}>
                    {displayDate(review.created_at)}
                </span>
            </div>

            <p className={styles.review__description}>
                {review.text.toString()}
            </p>
        </li>
    );
};

Review.propTypes = {
    review: PropTypes.object.isRequired
};

export default Review;
