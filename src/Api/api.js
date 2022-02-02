import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3333" });

export const fetchGenders = async () => {
  const response = await api.get("genres");
  const data = await response.data;

  return data;
};

export const fetchMovies = async (idGenero) => {
  const response = await api.get(`/movies?Genre_id=${idGenero}`);
  const data = await response.data;

  console.log(data);
  console.log(idGenero);

  return data;
};
