import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";
const GptSearch = () => {
  /** GPT Search:
        -GPT Search Bar
        -GPT Movie suggestions */
  return (
    <>
      <div className="fixed w-screen -z-[10]">
        <img  className="h-screen object-cover md:h-auto" src={BG_URL} alt="background" />
      </div>
      <div className="pt-[25%] md:pt-0">
        <div className="mx-auto" >
          <GptSearchBar />
        </div>

        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
