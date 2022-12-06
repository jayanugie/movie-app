import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../api";
import TopNavbar from "../components/TopNavbar";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i}>
          <div>{movie.title}</div>
          <img
            className=" h-60"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt="poster"
          />
          <div>{movie.release_date}</div>
          <div>{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results)
      console.log({ query: query });
    }
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div>
      <TopNavbar search={search} />
      {/* movies */}
      <PopularMovieList />
    </div>
  );
};

export default Popular;
