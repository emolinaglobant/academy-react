import axios from "axios";

const API_Service = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export default API_Service;
