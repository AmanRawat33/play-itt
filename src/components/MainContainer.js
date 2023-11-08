import { useSelector } from "react-redux";
import MovieBackground from "./MovieBackground";
import MovieTitle from "./MovieTitle";
function MainContainer() {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;
    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;
  return (
    <div>
          <MovieTitle title={original_title} overview = {overview} />
      <MovieBackground movieID = {id} />
    </div>
  );
}

export default MainContainer;
