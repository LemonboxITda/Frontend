import axios from "axios";

const getApi = async (params, end_url, token) => {
    
    const config = {
        params: params,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
    };
    config.headers["Authorization"] = `${token}`;
    
    return await axios.get(process.env.REACT_APP_BACK_BASE_URL + end_url, config);
};

export default getApi;
