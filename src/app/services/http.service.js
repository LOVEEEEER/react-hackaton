import axios from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.defaultsUrl;

axios.interceptors.request.use(
    function (response) {
        if (config.isFireBase) {
            const containSlash = /\/$/g.test(response.url);
            response.url =
                (containSlash ? response.url.slice(0, -1) : response.url) +
                ".json";
            return response;
        }
        return response;
    },
    function (error) {
        Promise.reject(error);
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
