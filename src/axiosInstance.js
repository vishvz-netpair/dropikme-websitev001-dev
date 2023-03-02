import axios from "axios";
const API_BASE_URL = "http://localhost:8080/api";

const AI = axios.create({ baseURL: API_BASE_URL });

export default AI;
