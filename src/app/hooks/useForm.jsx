import { useState, useEffect } from "react";
import { validator } from "../utils/validator";

const useForm = (initialState, config) => {
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleChange = ({ name, value }) => {
        setData((prevState) => ({ ...prevState, [name]: value }));
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, config);
        const errorsUser = {};
        Object.keys(data).forEach((item) => {
            if (errors[item] && data[item].toString().length > 0) {
                errorsUser[item] = errors[item];
            }
        });
        setErrors(errorsUser);
        return Object.keys(errors).length === 0;
    };
    const validateBySubmit = () => {
        const errors = validator(data, config);
        setErrors(errors);
    };

    return { data, handleChange, errors, validateBySubmit };
};

export default useForm;
