import React from "react";
import useForm from "../../../../hooks/useForm";
import Button from "../../../common/Button";
import TextAreaField from "../../../common/forms/TextAreaField";

const ReviewsForm = () => {
    const { data, handleChange } = useForm({ reviews: "" });
    return (
        <form>
            <TextAreaField
                name="reviews"
                value={data.reviews}
                onChange={handleChange}
            />
            <Button>Опубликовать</Button>
        </form>
    );
};

export default ReviewsForm;
