import axios from "axios";

const postApi = async (data, end_url, token) => {

    const config = {
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
    };
    config.headers["Authorization"] = `${token}`;

    return await axios.post(process.env.REACT_APP_BACK_BASE_URL + end_url, data, config);
};

export default postApi;
