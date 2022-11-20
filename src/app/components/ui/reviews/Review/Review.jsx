import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles/review.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getUserById } from "../../../../store/slices/auth";
import Avatar from "../../../common/Avatar";
import { displayDate } from "../../../../utils/dateService";
import deleteIcon from "../../../../assets/svg/delete.svg";
import { deleteComment } from "../../../../store/slices/comments";

const Review = ({ review }) => {
    const [openFullText, setOpenFullText] = useState(false);
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser());
    const authorComment = useSelector(getUserById(review.userId));
    const handleDelete = () => {
        dispatch(deleteComment(review.id));
    };
    const getReviewText = (text) => {
        if (!openFullText) {
            return text.slice(0, 35);
        }
        return text;
    };
    const handleToggleFullText = () => {
        setOpenFullText((prevState) => !prevState);
    };
    return (
        <li className={styles.review}>
            <div className={styles.review_user}>
                <Avatar src={authorComment.image} size={30} />
                <h3 className={styles.review__author}>{authorComment.name}</h3>
                <span className={styles.review__date}>
                    {displayDate(review.created_at)}
                </span>
                {currentUser && currentUser.id === authorComment.id && (
                    <img
                        className={styles.review__delete}
                        src={deleteIcon}
                        onClick={handleDelete}
                    />
                )}
            </div>

            <p className={styles.review__description}>
                {getReviewText(review.text)}{" "}
                {!openFullText && review.text.length > 34 && (
                    <span
                        className={styles.review__full_description}
                        onClick={handleToggleFullText}
                    >
                        открыть полностью
                    </span>
                )}
            </p>
        </li>
    );
};

Review.propTypes = {
    review: PropTypes.object.isRequired
};

export default Review;
