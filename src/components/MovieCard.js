import {IMG_CDN_URL} from "../utils/constants"
const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="mr-3 w-36 md:w-48 cursor-pointer hover:duration-150 hover:scale-105">
      <img
        alt="movie poster"
        src={IMG_CDN_URL + poster_path}
        className="rounded-md"
      />
    </div>
  );
}

export default MovieCard
