import axios from "axios";

/**
	I created this express api to parse csv
	files and return then as json more easily
*/
const api = axios.create({
	baseURL: "https://csvparsertojson.herokuapp.com/",
});

export default api;
