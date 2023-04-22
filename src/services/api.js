import axios from "axios";
const api = axios.create({
  baseURL: "http://worldtimeapi.org/api/ip",
});
export default api;