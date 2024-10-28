const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-10 absolute text-white  w-full min-h-[120vh] bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="w-2/4 py-4 px-2 font-semibold text-lg">{overview}</p>
      <div className="py-3">
        <button className="bg-white font-bold tex-lg text-black px-10 py-3 rounded-md hover:bg-opacity-80">
        ▶ Play
        </button>
        <button className="bg-slate-400 font-bold tex-lg text-white px-10 py-3 rounded-md mx-3 ">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
