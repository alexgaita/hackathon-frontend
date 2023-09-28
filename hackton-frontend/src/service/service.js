import { baseurl } from "../urls";
import axios from "axios";
export const postQuestion = async (data) => {
  return axios
    .post(baseurl + "/inputs", data, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => res.data.data);
};
