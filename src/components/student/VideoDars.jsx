import React, { memo, useEffect, useRef, useState } from "react";
//icons
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import { FaExpand } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { RiPauseCircleLine } from "react-icons/ri";
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";
// import video1 from "../../assets/student/darslar/end1YnwyFCht3X9t.mp4";

//main function
const VideoDars = memo(function VideoDars({ selectedVideo }) {
  const [togglePlay, setTogglePlay] = useState(true);
  const [toggleSound, setToggleSound] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const containerRef = useRef();

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  // Slider fonini volume ga qarab yangilash
  useEffect(() => {
    const slider = document.querySelector(".volume-slider");
    if (slider) {
      slider.style.setProperty("--value", `${volume * 100}%`);
    }
  }, [volume]);
  const videoRef = useRef();

  // video control
  //play video
  const play = () => {
    videoRef.current.play();
    setTogglePlay(false);
  };

  //pause video
  const pause = () => {
    videoRef.current.pause();
    setTogglePlay(true);
  };

  //mute video
  const mute = () => {
    videoRef.current.muted = false;
    setToggleSound(true);
  };

  //mute video
  const unMute = () => {
    videoRef.current.muted = true;
    setToggleSound(false);
  };

  // videoni 10 second oldinga o'tkazish
  const forwardTo = () => {
    videoRef.current.currentTime += 10;
  };
  const backTo = () => {
    videoRef.current.currentTime -= 10;
  };

  const time = videoRef.current?.duration;
  //  video davomiyligini hisoblash
  const videoTime = (s) => {
    const sec = Math.floor(s);
    console.log(sec);
    const min = Math.floor(sec / 60);

    const second = Math.floor(sec % 60);

    return `${min}:${second < 10 ? "0" : ""}${second}`;
  };

  //progress bar yasash
  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleOnLoadMetadata = () => {
    setDuration(videoRef.current.duration);
  };
  const handleSeak = (e) => {
    const newValue = parseFloat(e.target.value);
    videoRef.current.currentTime = newValue;
    setCurrentTime(newValue);
  };

  //videoni fullscreen rejimiga o'tkazish va qaytarish
  const getFullScreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
      } else return;
    }
  };

  const exitFullScreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else return;
    }
  };

  return (
    <div className="w-full h-full  ">
      <h2 className="my-5 p-1 text-xl font-bold text-title">Kirish</h2>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden pb-[56.25%] group  rounded-lg"
      >
        <video
          ref={videoRef}
          key={selectedVideo} // yangi video bosilganda qayta yuklanadi
          className="absolute z-0 top-0 left-0 w-full h-full object-cover"
          src={selectedVideo?.videoUrl} // <source> shart emas
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleOnLoadMetadata}
        />
        {/* ==================== Video title ======================================================== */}
        <span className="opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 inline-block text-3xl font-medium absolute top-5 left-[50%] translate-x-[-50%] text-white">
          Video title
        </span>
        {/* ================== ekranga teginish orqali video boshqaruvi ============================================ */}
        <div className="absolute top-[50%] translate-y-[-50%] left-0 w-full flex gap-14 items-center justify-center transition-all duration-400 opacity-0 group-hover:opacity-100">
          <button onClick={backTo}>
            <IoPlayBack className="w-20 h-20 text-white opacity-20 cursor-pointer" />
          </button>
          <div>
            {!togglePlay && (
              <button onClick={pause}>
                <RiPauseCircleLine className="w-20 h-20 text-white opacity-20 cursor-pointer" />
              </button>
            )}
            {togglePlay && (
              <button onClick={play}>
                <MdOutlinePlayCircle className="w-20 h-20 text-white opacity-20 cursor-pointer" />
              </button>
            )}
          </div>
          <button onClick={forwardTo}>
            <IoPlayForward className="w-20 h-20 text-white opacity-20 cursor-pointer" />
          </button>
        </div>
        {/* ============= videoni boshqaruvchi buttonlar ====================================== */}
        <div className="absolute  opacity-0 translate-y-5 transition-all duration-400 z-10 left-0 bottom-4 w-full px-4 group-hover:translate-y-0 flex group-hover:opacity-100 flex-col gap-3">
          <input
            type="range"
            min="0"
            max={duration}
            step="0.1"
            value={currentTime}
            onChange={handleSeak}
            className="progress-bar"
            style={{
              "--progress": `${(currentTime / duration) * 100}%`,
              width: "100%",
            }}
          />
          {/* ======================================================== */}
          <div className="flex justify-between items-center">
            <div className="flex gap-10 items-center">
              <div className="pause-and-speed flex gap-4">
                <button className="cursor-pointer">
                  <IoPlaySkipBack
                    className="w-5 h-5 text-white"
                    onClick={backTo}
                  />
                </button>
                <div className="flex  items-center">
                  {togglePlay && (
                    <button onClick={play} className="cursor-pointer">
                      <FaPlay className="w-5 h-5 text-white" />
                    </button>
                  )}
                  {!togglePlay && (
                    <button onClick={pause} className="cursor-pointer">
                      <FaPause className="w-5 h-5 text-white" />
                    </button>
                  )}
                </div>
                <button className="cursor-pointer" onClick={forwardTo}>
                  <IoPlaySkipForward className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="soud flex items-center gap-5">
                <div className="sound flex justify-center items-center">
                  {toggleSound && (
                    <button className="cursor-pointer">
                      <HiSpeakerWave
                        onClick={unMute}
                        className="w-5 h-5 text-white"
                      />
                    </button>
                  )}
                  {!toggleSound && (
                    <button className="cursor-pointer">
                      <HiSpeakerXMark
                        onClick={mute}
                        className="w-5 h-5 text-white"
                      />
                    </button>
                  )}
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  className=" volume-slider "
                  value={volume}
                  onChange={handleVolumeChange}
                />

                <div>
                  <span className="text-white">
                    {videoTime(currentTime)} / {videoTime(time) || ""}
                    {/* 0:12 / {videoTime(selectedVideo?.videoDuration)} */}
                  </span>
                </div>
              </div>
            </div>

            <div className="setting-section flex items-center gap-3">
              <button
                className="text-white cursor-pointer"
                onClick={exitFullScreen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-picture-in-picture-on"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
                  <path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" />
                  <path d="M7 9l4 4" />
                  <path d="M8 13h3v-3" />
                </svg>
              </button>
              <button className="text-white">
                <IoIosSettings className="w-6 h-6" />
              </button>
              <button
                className="text-white cursor-pointer"
                onClick={getFullScreen}
              >
                <FaExpand className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
});
export default VideoDars;
