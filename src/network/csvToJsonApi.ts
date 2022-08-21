import axios from "axios";

const api = axios.create({
	baseURL: "https://csvparsertojson.herokuapp.com/",
});

export default api;
