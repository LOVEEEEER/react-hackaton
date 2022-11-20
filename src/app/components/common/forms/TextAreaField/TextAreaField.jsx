import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/text-area-field.module.scss";

const TextAreaField = ({
    type,
    name,
    value,
    onChange,
    error,
    placeholder,
    label
}) => {
    return (
        <div>
            <textarea className={styles.textField__input} />
            <label className={styles.textField__label} htmlFor={name}>
                <p>Привиет</p>
            </label>
        </div>
    );
};

TextAreaField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string
};

export default TextAreaField;
