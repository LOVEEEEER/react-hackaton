export const validatorConfig = {
    review: {
        isRequired: {
            message: "Нельзя отправить пустой отзыв"
        },
        min: {
            message: "Комментарий не может быть меньше 30 символов",
            params: 30
        }
    }
};
