import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../api";
import Footer from "../components/global/Footer";
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

  const Backdrop = () => {
    return (
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
    );
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      const date = new Date(movie.release_date);
      let year = date.getFullYear();

      return (
        <div key={i} className="text-neutral-200 p-2 sm:p-5 sm:w-52 w-28">
          <img
            className="rounded-md"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt="poster"
          />
          <p className="truncate mt-3 sm:text-base text-xs">{movie.title}</p>
          <div className="flex flex-row text-xs text-neutral-500">
            <p className="basis-1/2">{year}</p>
            <div className="basis-1/2 flex justify-end text-yellow-300 space-x-2">
              <img
                src="/assets/yellow-star.png"
                alt="star"
                className="h-3 mt-0.5"
              />
              <p>{movie.vote_average}</p>
            </div>
          </div>
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
      <Backdrop />
      <MiddleNavbar />
      <div className="bg-zinc-900 p-5">
        <div className="container mx-auto flex flex-wrap justify-center">
          <PopularMovieList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Popular;
