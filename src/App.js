import { useEffect } from "react";
import { getMovieList } from "./api";

const App = () => {

  useEffect(() => {
    getMovieList()
  }, [])

  const search = (q) => {
    console.log({ q });
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Movie App by jayanugie</h1>
          <input
            placeholder="search"
            className="border-2 rounded-md"
            onChange={({ target }) => search(target.value)}
          />
        </div>
      </div>

      {/* movies */}
      <div className="flex justify-center">
        <div className="border">
          <h1>example</h1>
          <img src="" />
          <p>date</p>
          <p>rate</p>
        </div>
      </div>
    </div>
  );
};

export default App;
