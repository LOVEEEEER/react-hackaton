import httpService from "./http.service";

const usersEndPoint = "users1/";

const usersService = {
    fetchAll: async () => {
        const { data } = await httpService.get(usersEndPoint);
        return data;
    },
    createUser: async (userId, payload) => {
        const { data } = await httpService.put(usersEndPoint + userId, payload);
        return data;
    },
    getUserById: async (userId) => {
        const { data } = await httpService.get(usersEndPoint + userId);
        return data;
    }
};

export default usersService;
