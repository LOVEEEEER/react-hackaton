export function generateAuthError(error) {
    switch (error) {
        case "INVALID_PASSWORD":
            return "Некоректный E-mail или пароль";
        case "EMAIL_NOT_FOUND":
            return "Некоректный E-mail или пароль";
        case "EMAIL_EXISTS":
            return "Некоректный E-mail";
        case "INVALID_EMAIL":
            return "E-mail введен некоректно";
        default:
            return error;
    }
}
