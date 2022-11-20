import developers from "../mock/developers.json";
import httpService from "../services/http.service";

const useMockData = () => {
    async function initialize() {
        try {
            for (const developer of developers) {
                await httpService.put("developer/" + developer.id, developer);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return { initialize };
};

export default useMockData;
