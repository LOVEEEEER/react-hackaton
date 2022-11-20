import httpService from "./http.service";

const commentsEndPoint = "comments/";

const commentsService = {
    get: async (developerId) => {
        const { data } = await httpService.get(commentsEndPoint, {
            params: {
                orderBy: '"developerId"',
                equalTo: `"${developerId}"`
            }
        });
        return data;
    },
    create: async (id, payload) => {
        const { data } = await httpService.put(commentsEndPoint + id, payload);
        return data;
    },
    delete: async (commentId) => {
        const { data } = await httpService.delete(commentsEndPoint + commentId);
        return data;
    }
};

export default commentsService;
