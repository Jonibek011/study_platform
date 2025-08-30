import React, { lazy, Suspense, useEffect, useState } from "react";
import { darslar } from "../../backend/student/studenBackend";
import { Link, useParams } from "react-router-dom";
import CustomNavLink from "../../components/ui/CustomNavLink";
//icons
import { IoIosArrowForward } from "react-icons/io";
import { LiaTelegram } from "react-icons/lia";

const VideoDars = lazy(() => import("../../components/student/VideoDars"));
//component
import VideoLoading from "../../components/loadings/VideoLoading";
//main function
function DarslarOpen() {
  const { id } = useParams();
  const dataId = Number(id);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const data = darslar.filter((dars) => dars.id === dataId);
  const elements = data[0].elements;

  useEffect(() => {
    if (elements?.length > 0) {
      setSelectedVideo(elements[0].video);
    }
  }, [elements]);

  //video davomiyligini hisoblash
  const videoTime = (ms) => {
    const sec = Math.round(ms / 1000);
    const min = Math.round(sec / 60);
    const second = sec % 60;
    return `${min}:${second}`;
  };

  //button orqali keyingi darsga o'tish
  const nextLesson = () => {
    const currentIndex = elements.findIndex(
      (element) => element.video === selectedVideo
    );
    const nextIndex = currentIndex + 1;
    if (nextIndex < elements.length) {
      setSelectedVideo(elements[nextIndex].video);
    }
  };
  return (
    <div className="w-full h-full py-3 overflow-y-auto">
      <div className="bg-main-bg rounded-lg p-4 flex flex-col xl:flex-row gap-8">
        <div className="dars-mavzulari w-full order-2 xl:order-1 xl:w-[55%] ">
          <h2 className="text-title text-[25px] font-bold">{data[0].title}</h2>
          <p className="text-lg text-lighter-text">
            Siz ushbu kursni{" "}
            <span className="text-[#00A34C]">{data?.[0]?.progress}%</span>{" "}
            tugatdingiz
          </p>
          <div className="mavzular mt-3 border border-darslar-border rounded-lg w-full py-3  flex flex-col gap-">
            <h2 className="font-bold text-title text-xl px-4 border-b border-darslar-border pb-8">
              Kurs tarkibi
            </h2>
            <ul>
              {elements.map((element) => {
                const isActive = selectedVideo === element.video;
                return (
                  <li
                    key={element.id}
                    className={` ${
                      isActive
                        ? "bg-darslar-active-bg hover:bg-darslar active-bg"
                        : "bg-main-bg hover:bg-darslar-mavzu-hover"
                    }`}
                  >
                    <div className="flex justify-between border-b border-darslar-border px-4 py-3">
                      <h4 className={`font-semibold text-lg text-title `}>
                        {element.mavzu}
                      </h4>
                      <div className="flex gap-3 items-center">
                        <span className="text-xs text-lighter-text">
                          {videoTime(element?.video?.videoDuration)} min
                        </span>
                        <button
                          onClick={() => setSelectedVideo(element.video)}
                          className={`${
                            isActive ? "border-none" : "border"
                          } cursor-pointer w-8 rounded-lg border-darslar-border inline-flex justify-center items-center h-8`}
                        >
                          <IoIosArrowForward className="w-5 h-5 text-darslar-teacher-name" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="px-4 mt-3 flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="profile w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={data[0].userPhoto}
                    className="h-full min-w-auto object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-lg text-darslar-teacher-name font-medium">
                    {data[0].teacher}
                  </h2>
                  <p className="text-[15px] text-lighter-text">
                    {data[0].profession}
                  </p>
                </div>
              </div>

              <div className="teacher-social w-8 h-8 border rounded-lg border-darslar-border">
                <Link
                  to="teacher"
                  className="w-full h-full inline-flex justify-center items-center  "
                >
                  <LiaTelegram className="w-5 h-5 text-darslar-teacher-name" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="video-section order-1 xl:order-2 w-full h-auto ">
          <Suspense fallback={<VideoLoading />}>
            <VideoDars
              className="w-full "
              selectedVideo={selectedVideo}
              onNextLesson={nextLesson}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default DarslarOpen;
