const MovieTitle = ({ title, overview }) => {
  return (
    <>
      <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-4xl font-bold max-w-sm">{title}</h1>
        <p className="mt-4 max-w-md">{overview}</p>
        <div className="mt-2">
          <button className="px-6 py-2 bg-white text-black rounded-md font-bold text-lg hover:bg-opacity-70 ">
            Play
          </button>
          <button className="px-6 py-2 bg-gray-400 bg-opacity-40 text-white rounded-md font-bold ml-2 text-lg">
            More info
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieTitle;
