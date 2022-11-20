export const validatorConfig = {
    name: {
        isRequired: {
            message: "Поле 'имя' обязательно для заполнения"
        }
    },
    email: {
        isRequired: {
            message: "Поле 'E-mail' обязательно для заполнения"
        },
        isEmail: {
            message: "Поле 'E-mail' введено некоректно"
        }
    },
    password: {
        isRequired: {
            message: "Поле 'пароль' обязательно для заполнения"
        },
        isContainCapitalSymbol: {
            message: "Поле 'пароль' должно содержать минимум 1 заглавную букву"
        },
        min: {
            message: "Поле 'пароль не может быть меньше 8 символов'",
            params: 8
        }
    }
};
