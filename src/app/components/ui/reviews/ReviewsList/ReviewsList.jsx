import React, { useEffect } from "react";
import styles from "./styles/room-reviews-list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments, loadComments } from "../../../../store/slices/comments";
import TextSlider from "../../../common/TextSlider";
import Review from "../Review";
import _ from "lodash";

const ReviewsList = () => {
    const dispatch = useDispatch();
    const { developerId } = useParams();
    const reviews = useSelector(getComments());

    useEffect(() => {
        dispatch(loadComments(developerId));
    }, []);

    if (reviews) {
        const sortedReviews = _.orderBy(reviews, ["created_at"], ["desc"]);
        return (
            <ul className={styles.reviews__list}>
                {sortedReviews.length > 0 ? (
                    <TextSlider>
                        {sortedReviews.map((review) => (
                            <Review key={review.id} review={review} />
                        ))}
                    </TextSlider>
                ) : (
                    <p>Список отзывов пуст</p>
                )}
            </ul>
        );
    }
};

export default ReviewsList;
