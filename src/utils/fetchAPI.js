import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/";

const options = {
    // method: "get",
    // url: BASE_URL,
    // headers: {},
    params: {
        appid: process.env.REACT_APP_REPID_API_KEY,
    },
};

export const fetchAPI = async (url) => {
    const { data } = await axios(`${BASE_URL}/${url}`, options);

    return data;
};
