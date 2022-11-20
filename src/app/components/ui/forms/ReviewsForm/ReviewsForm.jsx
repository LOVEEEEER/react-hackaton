import React from "react";
import useForm from "../../../../hooks/useForm";
import Button from "../../../common/Button";
import TextField from "../../../common/forms/TextField";
import { validatorConfig } from "./validatorConfig";
import styles from "./styles/reviews-form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../../../store/slices/auth";
import { createComment } from "../../../../store/slices/comments";
import { useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const ReviewsForm = () => {
    const dispatch = useDispatch();
    const { developerId } = useParams();
    const currentUser = useSelector(getCurrentUser());
    const { data, handleChange, errors, validateBySubmit } = useForm(
        { review: "" },
        validatorConfig
    );

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        validateBySubmit();
        if (isValid) {
            const comment = {
                id: nanoid(),
                created_at: Date.now(),
                userId: currentUser.id,
                text: data.review,
                developerId: developerId
            };
            dispatch(createComment(comment));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.reviews_field_block}>
                <TextField
                    name="review"
                    value={data.reviews}
                    onChange={handleChange}
                    label="Ваши мысли..."
                    placeholder=" "
                    error={errors.review}
                />
            </div>
            <Button>Опубликовать</Button>
        </form>
    );
};

export default ReviewsForm;
