import React, { useState } from "react";
import PropTypes from "prop-types";
import passwordIcon from "../../../../assets/svg/showPassword.png";
import styles from "./styles/text-field.module.scss";

const TextField = ({
    label,
    type,
    name,
    value,
    onChange,
    error,
    placeholder,
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getPassButtonClasses = () => {
        if (!showPassword) {
            return styles.textField__passButton;
        } else {
            return styles.textField__passButton_show;
        }
    };
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className={styles.textField}>
            <input
                type={showPassword ? "text" : type}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className={styles.textField__input}
                placeholder={placeholder}
                {...rest}
            />
            <label className={styles.textField__label} htmlFor={name}>
                <p>{label}</p>
            </label>
            {type === "password" && (
                <button
                    className={getPassButtonClasses()}
                    type="button"
                    onClick={toggleShowPassword}
                >
                    <img src={passwordIcon} alt="icon" />
                </button>
            )}
            {error && <div className={styles.textField__error}>{error}</div>}
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string
};

export default React.memo(TextField);
