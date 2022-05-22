import axiosLibrary from "axios";

import { baseURL } from "config";

const axios = axiosLibrary.create({
    baseURL: baseURL
});

axios.interceptors.response.use((response) => {
    console.log(response);
    return response.data;
}, (error) => {
    console.log(error);
    return {error: true, message: error.message};
});

export default axios;