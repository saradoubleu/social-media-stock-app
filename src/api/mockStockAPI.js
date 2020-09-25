import axios from "axios";

const baseURL = "http://localhost:3000";

export const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});
