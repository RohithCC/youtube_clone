import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "x-rapidapi-key": "aacbdfaf04msh735f6c8cbe7eed8p1feaedjsnb822ae69195f",
        "x-rapidapi-host": "youtube-v3-alternative.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
