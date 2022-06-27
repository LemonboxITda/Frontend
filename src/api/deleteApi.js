import axios from "axios";

const deleteApi = async (data, end_url, token) => {

    const config = {
        data: data,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
    };
    // config.headers["Authorization"] = `Bearer ${token}`;
    
    return await axios.delete(process.env.REACT_APP_BACK_BASE_URL + end_url, config);
};

export default deleteApi;
