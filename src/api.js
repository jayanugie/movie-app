import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const movies = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
  return movies.data.results
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`);
  return search.data;
};
