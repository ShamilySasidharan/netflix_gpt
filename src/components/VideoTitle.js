const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-10 absolute text-white  w-full md:min-h-[120vh] h-[56vh]  bg-gradient-to-b from-transparent to-black">
      <h1 className=" md:text-6xl font-bold text-2xl ">{title}</h1>
      <p className="w-2/4 py-4 px-2 font-semibold md:text-lg hidden md:block ">{overview}</p>
      <div className="py-3">
        <button className="bg-white font-bold md:text-lg text-black px-10 py-3 rounded-md hover:bg-opacity-80 hidden md:inline-block">
        ▶ Play
        </button>
        <button className="bg-slate-400 font-bold md:text-lg text-white px-10 py-3 rounded-md mx-3 hover:bg-opacity-80 hidden md:inline-block ">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
