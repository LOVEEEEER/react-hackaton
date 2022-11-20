import React from "react";
import styles from "./styles/styled-form-page.module.scss";

const withStyledFormPage = (Component) => (props) => {
    return (
        <div className={styles.login}>
            <div className={styles.login__body}>
                <div className={styles.login__content}>
                    <Component {...props} />
                </div>
            </div>
        </div>
    );
};

export default withStyledFormPage;
