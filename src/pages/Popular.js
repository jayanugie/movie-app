import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../api";
import TopNavbar from "../components/global/TopNavbar";

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
      setPopularMovies(query.results);
      console.log({ query: query });
    }
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div>
      <TopNavbar search={search} />
      {/* movies */}

      <div
        className="h-96 md:bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/mountain.jpg)" }}
      >
        <div className="ml-10 lg:ml-28 space-y-3 p-5">
          <h1 className="lg:text-5xl text-3xl mt-16 font-semibold">The Walking Dead</h1>
          <p className="lg:w-1/3 w-1/2 text-sm lg:text-base">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs
          </p>
          <div className="flex text-white space-x-5 pt-5">
            <button className="p-3 rounded-2xl bg-red-700 text-xs lg:text-base">
              WATCH
            </button>
            <button className="p-3 rounded-2xl bg-black text-xs lg:text-base">
              + Add List
            </button>
          </div>
        </div>
      </div>

      <PopularMovieList />
    </div>
  );
};

export default Popular;
