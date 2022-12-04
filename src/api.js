import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  console.log({ data: movie });
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  return;
};
