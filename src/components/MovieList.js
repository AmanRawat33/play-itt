import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    (
      <div className="pl-16">
        <h3 className="text-white text-3xl py-6">{title}</h3>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex shrink-0">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
