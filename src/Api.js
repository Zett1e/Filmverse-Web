import axios from "axios";
import api_key from "./ApiKey";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // headers: {
  //   "X-API-KEY": "df30244e0f42ce5c6aaed5e7209f465a",
  //   // Authorization:
  //   // "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjMwMjQ0ZTBmNDJjZTVjNmFhZWQ1ZTcyMDlmNDY1YSIsInN1YiI6IjYxYjRjNDMwOWQ4OTM5MDA2MjM1NTY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x791m5T-kshPl8EJ7hUzv07PoP0kSszlhbYvimKUhEM",
  // },
  params: {
    api_key: api_key,
  },
});
