import axios from "axios";

export const login = (body: { email: String; password: String }) => {
  return axios.post("https://reqres.in/api/login", body);
};
