const MovieTitle = ({ title, overview }) => {
  return (
    <>
      <div className="pt-[18%] md:pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-2xl md:text-4xl font-bold max-w-sm">{title}</h1>
        <p className="hidden md:inline-block mt-4 max-w-md">{overview}</p>
        <div className="mt-2">
          <button className="px-2 py-1 md:px-6 md:py-2 bg-white text-black rounded-md font-bold text-md md:text-lg hover:bg-opacity-70 ">
            Play
          </button>
          <button className="px-2 py-1 md:px-6 md:py-2 bg-gray-400 bg-opacity-40 text-white rounded-md font-bold ml-2 text-md md:text-lg">
            More info
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieTitle;
