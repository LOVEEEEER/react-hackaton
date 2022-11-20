export const validator = (data, config) => {
    const errors = {};
    function validate(value, validateMethod, config) {
        switch (validateMethod) {
            case "isRequired":
                if (!value.trim().length) {
                    return config.message;
                }
                break;
            case "isEmail":
                if (!/\S+@\S+\.\S+/g.test(value)) return config.message;
                break;
            case "isContainCapitalSymbol":
                if (!/[A-Z]/g.test(value)) return config.message;
                break;
            case "min":
                if (value.length < config.params) return config.message;
                break;

            default:
                return config.message;
        }
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                data[fieldName],
                validateMethod,
                config[fieldName][validateMethod]
            );
            if (!errors[fieldName] && error) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
};
