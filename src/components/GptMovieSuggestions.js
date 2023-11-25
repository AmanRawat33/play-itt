import { useSelector } from "react-redux"
import MovieList from "../components/MovieList"

const GptMovieSuggestions = () => {
  const gpt = useSelector(store => store.gpt);
  const { movieNames, movieResults } = gpt;
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 backdrop-blur-sm text-white">
      <div>
        {movieNames?.map((movieName, idx) => (
          <MovieList title={movieName} movies={movieResults[idx]} />
        ))}
        </div>
    </div>
  )
}

export default GptMovieSuggestions
