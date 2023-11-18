import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  /**
   * MovieList - Popular, Now Playing, Recommended, Horror
   *  MovieCard*N
   */
  const movies = useSelector((store) => store.movies);
  return movies && (
    <div className="bg-black">
      <div className="-mt-60 relative z-20">
        <MovieList title={"NowPlaying"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.addPopularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
