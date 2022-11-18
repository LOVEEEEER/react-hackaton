import httpService from "./http.service";

const usersEndPoint = "users/";

const usersService = {
    fetchAll: async () => {
        const { data } = await httpService.get(usersEndPoint);
        return data;
    },
    getById: async (userId) => {
        const { data } = await httpService.get(usersEndPoint + userId);
        return data;
    }
};

export default usersService;
