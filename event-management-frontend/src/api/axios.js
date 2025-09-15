import axios from "axios";

const api = axios.create({
  baseURL: "https://test-project-1-riyv.onrender.com/api", 
});

export default api;
