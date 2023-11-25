import { useRef } from "react";
import lang from "./languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "act as a movie recommendation system and suggest some movies for the query: " +
      searchText?.current.value +
      ". Only give me name of 6 movies. They should be comma separated";
    console.log(searchText?.current.value);
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: "hi" }],
    //   model: "gpt-3.5-turbo-0301",
    // });
    console.log([
      "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan",
    ]);
    const gptMovies = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // This will return an array of five promises.
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black grid grid-cols-12 md:w-1/2 w-[90%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="col-span-10 py-4 px-6 bg-red-100"
        />
        <button
          className="bg-red-500 py-4 px-2 md:px-6 col-span-2 text-white sm:text-sm md:text-xl"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
