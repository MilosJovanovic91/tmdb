import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Pagination from "./components/Pagination";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import "./App.css";

/* const FEATURE_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=e767bc047236956084387cbfa38abffe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=e767bc047236956084387cbfa38abffe&query=&page=1"; */
/* const topRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e767bc047236956084387cbfa38abffe&language=en-US&page=1';
   const upcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=e767bc047236956084387cbfa38abffe&language=en-US&page=1'; 
*/
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  /* 
   popular is the same as FEATURE_API and all paths are 20 movies
   const popular = 'https://api.themoviedb.org/3/movie/popular?api_key=e767bc047236956084387cbfa38abffe&language=en-US&page=1';
  const search = 'https://api.themoviedb.org/3/search/movie?api_key=e767bc047236956084387cbfa38abffe&page=1';
 */
  //  useEffect(() => {
  //   fetch(FEATURE_API)
  //   .then(res => res.json())
  //   .then(data => {
  //     setMovies(data.results);
  //   });
  // }, []);

  const getMovies = (init) => {
    if (searchTerm.length > 0 && page > 0) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=e767bc047236956084387cbfa38abffe&language=en-USinclude_adult=false&query=${searchTerm}&page=${init ? 1 : page}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setTotalPages(data.total_pages);
          setMovies(data.results);
        });
    }
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getMovies(true); // init true
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // <Pagination totalPages={totalPages} page={page} setPage={setPage} />
  return (
    <div>
      
      <header>
        <div className="pages">
          <TopRated />
          <Popular />
          <Upcoming />
      </div>
      <div className="form">
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
        </div>
      </header>

      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>

      {movies.length > 0 && totalPages > 1 && (
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
