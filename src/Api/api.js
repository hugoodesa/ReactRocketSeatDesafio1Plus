import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000/genres" });

export const fetchGenders = async () => {
  const response = await api.get("genres");
  const data = await response.data();

  console.log(data);
};
