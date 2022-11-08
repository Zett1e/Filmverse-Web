import axios from "axios";
import api_key from "./ApiKey";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: api_key,
  },
});
