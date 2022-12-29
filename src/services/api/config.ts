import axios from "axios";
import baseURL from "../../constants/urls";

const instance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
