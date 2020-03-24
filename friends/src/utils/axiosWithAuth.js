import axios from "axios";
//test/dssd
export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: "http://localhost:5000"
  });
};