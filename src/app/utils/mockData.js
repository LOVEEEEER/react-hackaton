import users from "../mock/users.json";
import httpService from "../services/http.service";

const useMockData = () => {
    async function initialize() {
        try {
            for (const user of users) {
                await httpService.put("user/" + user.id, user);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return { initialize };
};

export default useMockData;
