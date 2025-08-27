import React from "react";

function VideoLoading() {
  return (
    <div className="w-full h-[60vh] flex flex-col gap-4 relative overflow-hidden">
      <span className="loading-shadow w-[120%] h-[70%] backdrop-blur-3xl rounded-full opacity-5  bg-white  absolute"></span>
      <div className="w-[30%] h-6 bg-gray-200 mt-10 pb-4"></div>
      <div className="w-full h-full bg-gray-200 rounded-xl flex justify-center items-center">
        <span className="loading loading-spinner loading-xl opacity-30"></span>
      </div>

      <div className="flex gap-10">
        <span className="inline-block w-6 h-6 bg-gray-200 rounded-full"></span>
        <div className="w-[90%] h-6 rounded-2xl inline-block bg-gray-200"></div>
      </div>

      <div className="flex gap-8 justify-end">
        <div className="w-[70%] h-6 rounded-2xl inline-block bg-gray-200"></div>
        <span className="inline-block w-6 h-6 bg-gray-200 rounded-full"></span>
      </div>
    </div>
  );
}

export default VideoLoading;
