import {IMG_CDN_URL} from "../utils/constants"
const MovieCard = ({ poster_path }) => {
  return (
    <div className="mr-3" >
          <img alt="movie poster" src={IMG_CDN_URL + poster_path} className="rounded-md"/>
    </div>
  )
}

export default MovieCard
