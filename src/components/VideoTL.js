const VideoTL = ({title,overview})=>{
  return(
    <div className=" absolute pt-[18%] px-16 w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl">
        {title}
      </h1>
      <div className="text-xs my-5 text-left w-1/4">
        {overview}
      </div>
      <div className="flex w-2/4">
        <button className="px-14 p-2  bg-white text-black hover:bg-opacity-80 text-sm rounded-md">Play</button>
        <button className="px-16 p-2  bg-gray-600 text-white bg-opacity-50 text-sm ml-1 rounded-md">More Info</button>
      </div>
    </div>
  );
};

export default VideoTL;