
const BASE_URL = "/api/demos";

export const getDemos = async () => {
    const endpoint = BASE_URL + "/getDemos";
    return await restService.get(endpoint);
};

export const postDemos = async (data: Demo) => {
    const endpoint = BASE_URL + "/postDemo";
    return await restService.post(endpoint, {});
};
