import axios from "axios";

const api = axios.create({
  baseURL: "https://server-postit.herokuapp.com",
});

export default api;
