import lang from "./languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="col-span-10 py-4 px-6 bg-red-100"
        />
        <button className="bg-red-500 py-4 px-6 col-span-2 text-white text-xl">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
