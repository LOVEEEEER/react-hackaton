import httpService from "./http.service";
const favouritesEndpoint = "favourite/";

const favouritesService = {
    get: async (userId) => {
        const { data } = await httpService.get(favouritesEndpoint, {
            params: {
              orderBy: '"userId"',
              equalTo: `"${userId}"`
            }
          });
        const { content } = data;
        return content;
    },
    create: async (payload) => {
        const { data } = await httpService.put(
            favouritesEndpoint + payload.id,
            payload
        );
        const { content } = data;
        return content;
    },
    delete: async (id) => {
        const { data } = await httpService.delete(favouritesEndpoint + id);
        return data;
    }
};

export default favouritesService;
