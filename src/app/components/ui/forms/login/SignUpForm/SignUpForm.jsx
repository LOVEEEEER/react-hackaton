import React from "react";
import useForm from "../../../../../hooks/useForm";
import styles from "../styles/login-form.module.scss";
import TextField from "../../../../common/forms/TextField";
import { validatorConfig } from "./validatorConfig";
import { getAuthSignUpError, signUp } from "../../../../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../common/Button";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleChange, data, validateBySubmit, errors } = useForm(
        {
            name: "",
            email: "",
            password: ""
        },
        validatorConfig
    );

    const authError = useSelector(getAuthSignUpError());

    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        validateBySubmit();
        if (isValid) {
            dispatch(signUp(data, navigate));
        }
    };
    return (
        <form className="login" onSubmit={handleSubmit}>
            <div className={styles.right__field}>
                <TextField
                    label="Введите имя"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder=" "
                    error={errors.name}
                />
            </div>
            <div className={styles.right__field}>
                <TextField
                    label="Введите email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder=" "
                    error={errors.email}
                />
            </div>
            <div className={styles.right__field}>
                <TextField
                    label="Введите пароль"
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder=" "
                    error={errors.password}
                />
            </div>
            {authError && <p className={styles.right__error}>{authError}</p>}
            <Button>Зарегистрироваться</Button>
        </form>
    );
};

export default SignUpForm;
