import restService from "@/src/view/main/lms/course/services/rest.service";

const BASE_URL = "/api/demos";

export const getDemos = async () => {
    const endpoint = BASE_URL + "/getDemos";
    return await restService.get(endpoint);
};

export const postDemo = async (demo: any, setLoading: (loading: boolean) => void) => {
    const endpoint = BASE_URL + "/postDemo";
    return await restService.post(endpoint, { requestData: demo, setLoading });
};
