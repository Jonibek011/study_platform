import React, { memo, useEffect, useRef, useState } from "react";
import { Form } from "react-router-dom";
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
import { IoStar } from "react-icons/io5";
// import video1 from "../../assets/student/darslar/end1YnwyFCht3X9t.mp4";
import toast from "react-hot-toast";

import { useWindowSize } from "../../hooks/optimizationHooks/useWindowSize";
//react hook form

import { useForm } from "react-hook-form";
//main function
const VideoDars = memo(function VideoDars({ selectedVideo, onNextLesson }) {
  const { width, height } = useWindowSize();
  const [togglePlay, setTogglePlay] = useState(true);
  const [toggleSound, setToggleSound] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const containerRef = useRef();
  const [rating, setRating] = useState(0);
  const [showControl, setShowControl] = useState(false);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  const { register, handleSubmit, reset } = useForm();
  //onsubmit for feedback
  const onSubmit = (data) => {
    toast.success("Habaringiz yuborildi!");
    console.log(data);
    reset();
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
  // const getFullScreen = () => {
  //   const video = videoRef.current;
  //   const container = containerRef.current;

  //   if (container.requestFullscreen) {
  //     container.requestFullscreen();
  //   } else if (container.webkitRequestFullscreen) {
  //     container.webkitRequestFullscreen(); // Safari
  //   } else if (container.msRequestFullscreen) {
  //     container.msRequestFullscreen(); // IE/Edge eski
  //   } else if (video.webkitEnterFullscreen) {
  //     video.webkitEnterFullscreen(); // iOS Safari faqat video
  //   }
  // };

  // const exitFullScreen = () => {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.webkitExitFullscreen) {
  //     document.webkitExitFullscreen();
  //   } else if (document.msExitFullscreen) {
  //     document.msExitFullscreen();
  //   }
  // };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    const container = containerRef.current;

    // Agar fullscreen yoqilmagan bo‘lsa
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen(); // Safari Mac
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen(); // iOS Safari (faqat video o‘zi fullscreen bo‘ladi)
      }
    } else {
      // fullscreenni o‘chirish
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

  //formani tozalash
  const handleReset = () => {
    reset();
  };

  return (
    <div className="w-full h-full  ">
      <h2 className="my-5 p-1 text-xl font-bold text-title">Kirish</h2>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden pb-[56.25%] group  rounded-lg"
      >
        <video
          onClick={() => setShowControl((prev) => !prev)}
          ref={videoRef}
          key={selectedVideo} // yangi video bosilganda qayta yuklanadi
          className="absolute z-0 top-0 left-0 w-full h-full object-cover"
          src={selectedVideo?.videoUrl} // <source> shart emas
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleOnLoadMetadata}
        />
        {/* ==================== Video title ======================================================== */}
        <span className="opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 inline-block text-lg md:text-2xl lg:text-3xl font-medium absolute top-5 left-[50%] translate-x-[-50%] text-white">
          Video title
        </span>
        {/* ================== ekranga teginish orqali video boshqaruvi ============================================ */}

        <div>
          <div
            className={`absolute top-[50%] translate-y-[-50%] left-0 w-full flex gap-14 items-center justify-center transition-all duration-400 ${
              showControl ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100`}
          >
            <button onClick={backTo}>
              <IoPlayBack className="w-10 h-10 lg:w-20 lg:h-20 text-white opacity-20 cursor-pointer" />
            </button>
            <div>
              {!togglePlay && (
                <button onClick={pause}>
                  <RiPauseCircleLine className="w-10 h-10  lg:w-20 lg:h-20 text-white opacity-20 cursor-pointer" />
                </button>
              )}
              {togglePlay && (
                <button onClick={play}>
                  <MdOutlinePlayCircle className="w-10 h-10  lg:w-20 lg:h-20 text-white opacity-20 cursor-pointer" />
                </button>
              )}
            </div>
            <button onClick={forwardTo}>
              <IoPlayForward className="w-10 h-10  lg:w-20 lg:h-20 text-white opacity-20 cursor-pointer" />
            </button>
          </div>

          {/* ============= videoni boshqaruvchi buttonlar ====================================== */}
          <div
            className={`absolute   translate-y-5 transition-all duration-400 z-10 left-0 bottom-5 md:bottom-4 w-full px-4 group-hover:translate-y-0 flex ${
              showControl ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100 flex-col gap-1 lg:gap-3`}
          >
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
            <div className="flex justify-between items-center  lg:h-8">
              <div className="flex gap-2 lg:gap-10 items-center ">
                <div className="pause-and-speed flex gap-1 md:gap-4">
                  <button className="cursor-pointer">
                    <IoPlaySkipBack
                      className=" w-3 h-3 lg:w-5 lg:h-5 text-white"
                      onClick={backTo}
                    />
                  </button>
                  <div className="flex  items-center">
                    {togglePlay && (
                      <button onClick={play} className="cursor-pointer">
                        <FaPlay className="w-3 h-3  lg:w-5 lg:h-5 text-white" />
                      </button>
                    )}
                    {!togglePlay && (
                      <button onClick={pause} className="cursor-pointer">
                        <FaPause className="w-3 h-3  lg:w-5 lg:h-5 text-white" />
                      </button>
                    )}
                  </div>
                  <button className="cursor-pointer" onClick={forwardTo}>
                    <IoPlaySkipForward className="w-3 h-3 lg:w-5 lg:h-55 text-white" />
                  </button>
                </div>
                <div className="soud flex items-center gap-5">
                  <div className="sound flex justify-center items-center">
                    {toggleSound && (
                      <button className="cursor-pointer">
                        <HiSpeakerWave
                          onClick={unMute}
                          className="w-3 h-3  lg:w-5 lg:h-5 text-white"
                        />
                      </button>
                    )}
                    {!toggleSound && (
                      <button className="cursor-pointer">
                        <HiSpeakerXMark
                          onClick={mute}
                          className="w-3 h-3  lg:w-5 lg:h-5 text-white"
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
                    <span className="text-[11px] md:text-[14px] text-white">
                      {videoTime(currentTime)} / {videoTime(time) || ""}
                      {/* 0:12 / {videoTime(selectedVideo?.videoDuration)} */}
                    </span>
                  </div>
                </div>
              </div>

              <div className="setting-section flex items-center gap-3">
                <button
                  className="text-white cursor-pointer"
                  onClick={toggleFullscreen}
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
                    className="icon w-4 h-4  lg:w-6 lg:h-6 icon-tabler icons-tabler-outline icon-tabler-picture-in-picture-on"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
                    <path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" />
                    <path d="M7 9l4 4" />
                    <path d="M8 13h3v-3" />
                  </svg>
                </button>
                <button className="text-white">
                  <IoIosSettings className="w-4 h-4 lg:w-6 lg:h-6" />
                </button>
                <button
                  className="text-white cursor-pointer"
                  onClick={toggleFullscreen}
                >
                  <FaExpand className="w-3 h-3 lg:w-4 lg:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 justify-between md:justify-end h-20">
        <div className="flex justify-start  md:gap-8 flex-col md:flex-row">
          <h2 className="text-title font-[600] whitespace-nowrap md:text-lg">
            Darsni Baholash
          </h2>
          <div className="flex gap-2 text-lightest-text">
            {[1, 2, 3, 4, 5].map((star) => {
              return (
                <IoStar
                  onClick={() => setRating(star)}
                  className={`md:w-5 md:h-5 cursor-pointer`}
                  style={{ color: star <= rating ? "#FFC900" : "#D9D9D9" }}
                />
              );
            })}
          </div>
        </div>
        <button
          onClick={onNextLesson}
          className="btn  rounded-full md:px-8 text-white border-none bg-blue-first font-medium hover:bg-blue-first shadow-none"
        >
          Keyingi dars
        </button>
      </div>
      <Form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className="feedback-section card flex flex-col gap-4  w-full px-5 py-5  border border-darslar-border  shadow-md rounded-xl"
      >
        <h2 className="text-lg text-title  font-semibold">Izoh yozish</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <textarea
            required
            {...register("textarea")}
            name="feedback"
            className="w-full h-48 text-title border bg-second-bg border-darslar-border rounded-xl p-4"
            id=""
          ></textarea>

          <div className="buttons flex justify-end lg:justify-start lg:flex-col gap-4">
            <button className="btn order-2 lg:order-1 text-white bg-blue-first border-none shadow-none hover:bg-blue-first rounded-full px-6 font-medium">
              Yuborish
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="btn order-1 lg:order-2 border-none shadow-none text-[#3B82F6] bg-[#3B82F624] hover:bg-darslar-active-bg rounded-full px-6 font-medium"
            >
              Tozalash
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
});
export default VideoDars;
