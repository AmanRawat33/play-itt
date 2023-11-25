import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  /**
   * MovieList - Popular, Now Playing, Recommended, Horror
   *  MovieCard*N
   */
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-60 relative z-20 md:pl-0 -ml-4">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.addPopularMovies} />
          <MovieList title={"Fan Favorites"} movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
