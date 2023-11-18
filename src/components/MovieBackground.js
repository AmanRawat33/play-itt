import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieBackground = ({ movieID }) => {
  
  const trailerURL = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieID);
  return (
    <>
      <div className="w-screen overflow-hidden" >
        <iframe
          className="w-screen aspect-video"
          src={"https://www.youtube.com/embed/" +trailerURL?.key+"?si=Kj1pR7-R-K7jW6qD&autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default MovieBackground;
