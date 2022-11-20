import axios from "axios";
import config from "../config.json";
import authService from "./auth.service";
import localStorageService from "./localStorage.service";

axios.defaults.baseURL = config.defaultsUrl;

axios.interceptors.request.use(
    async function (response) {
        if (config.isFireBase) {
            const containSlash = /\/$/g.test(response.url);
            response.url =
                (containSlash ? response.url.slice(0, -1) : response.url) +
                ".json";
            const expiresDate = localStorageService.getJwtExpires();
            const refreshToken = localStorageService.getRefreshToken();
            if (refreshToken && Date.now() > expiresDate) {
                const data = await authService.refresh();
                localStorageService.setTokens({
                    refreshToken: data.refresh_token,
                    idToken: data.id_token,
                    expiresIn: data.expires_in,
                    localId: data.user_id
                });
                const accessToken = localStorageService.getAccessToken();
                if (accessToken) {
                    config.params = { ...config.params, auth: accessToken };
                }
            }
            return response;
        }
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

function transformData(data) {
    return !data.id ? Object.keys(data).map((key) => ({ ...data[key] })) : data;
}

axios.interceptors.response.use(
    function (response) {
        if (response.data === null) return response;
        if (typeof response === "object") {
            response.data = { content: transformData(response.data) };
            return response;
        }
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const httpService = {
    post: axios.post,
    get: axios.get,
    put: axios.put,
    delete: axios.delete
};

export default httpService;
