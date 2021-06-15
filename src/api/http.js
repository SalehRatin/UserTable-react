import axios from "axios";

export const getAxiosInstance = () => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000,
  });
};
