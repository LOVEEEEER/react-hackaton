import React from "react";
import styles from "./styles/text-area-field.module.scss";

const TextAreaField = () => {
    return (
        <div>
            <textarea className={styles.textarea__area} />
        </div>
    );
};

export default TextAreaField;
