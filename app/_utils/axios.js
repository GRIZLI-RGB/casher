import axios from "axios";

const instance = axios.create({
	baseURL: "http://194.67.90.141:8000/api/",
});

export default instance;