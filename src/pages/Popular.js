import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../api";
import MiddleNavbar from "../components/global/MiddleNavbar";
import TopNavbar from "../components/global/TopNavbar";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [firstPopularMovie, setFirstPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
      setFirstPopularMovies(result[0]);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i} className="text-neutral-200 p-5 border sm:w-52">
          <img
            className="rounded-md"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt="poster"
          />
          <p>{movie.title}</p>
          <div>{movie.release_date}</div>
          <div>{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
      console.log({ query: query });
    }
  };

  return (
    <div>
      <TopNavbar search={search} />
      {/* movies */}

      <div
        className="bg-cover md:bg-right-top"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/${firstPopularMovie.backdrop_path})`,
        }}
      >
        <div className="space-y-3 md:p-28 p-16 text-white">
          <h1 className="lg:text-5xl text-3xl font-semibold">
            {firstPopularMovie.title}
          </h1>
          <p className="lg:w-1/2 text-sm lg:text-base">
            {firstPopularMovie.overview}
          </p>
          <div className="flex text-white space-x-5 pt-5 pb-2">
            <button className="p-3 rounded-full bg-red-700 text-xs lg:text-base hover:bg-red-800">
              WATCH
            </button>
            <button className="p-3 rounded-full bg-neutral-900 hover:bg-black text-xs lg:text-base">
              + Add List
            </button>
          </div>
        </div>
      </div>

      <MiddleNavbar />

      <div className="border bg-zinc-900 p-5">
        <div className="container mx-auto flex flex-wrap">
      <PopularMovieList />
      </div>
      </div>
    </div>
  );
};

export default Popular;
