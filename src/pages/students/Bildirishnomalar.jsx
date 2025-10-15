import React, { useEffect, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContextSelector } from "use-context-selector";
import { useWindowSize } from "../../hooks/optimizationHooks/useWindowSize";
function Bildirishnomalar() {
  const isDark = useContextSelector(DarkModeContext, (ctx) => ctx.isDark);
  const { width } = useWindowSize();
  const [maxTextLength, setMaxTextLength] = useState(0);
  const unread = [
    {
      id: 1,
      message: "Sizning xisobingizga yangi kirish aniqlandi",
      time: "12:32",
    },
    {
      id: 2,
      message: "Sizning xisobingizga yangi kirish aniqlandi",
      time: "12:32",
    },
  ];

  const read = [
    {
      id: 1,
      message:
        "Sizning xisobingizga yangi kirish aniqlandi Sizning xisobingizga yangi kirish aniqlandi",
      time: "12:32",
    },
    {
      id: 2,
      message: "Sizning xisobingizga yangi kirish aniqlandi",
      time: "12:32",
    },
    {
      id: 3,
      message: "Sizning xisobingizga yangi kirish aniqlandi",
      time: "12:32",
    },
    {
      id: 4,
      message: "Sizning xisobingizga yangi kirish aniqlandi",
      time: "12:32",
    },
    {
      id: 5,
      message: "Sizning xisobingizga yangi kirish aniqlandi",
      time: "12:32",
    },
    {
      id: 6,
      message: "Sizning xisobingizga yangi kirish aniqlandi",
      time: "12:32",
    },
    {
      id: 7,
      message: "Sizning xisobingizga yangi kirish aniqlandi",
      time: "12:32",
    },
    {
      id: 8,
      message: "Sizning xisobingizga yangi kirish aniqlandi",
      time: "12:32",
    },
  ];

  useEffect(() => {
    if (width > 0) {
      setMaxTextLength(28);
    }
    if (width > 350) {
      setMaxTextLength(30);
    }
    if (width > 435) {
      setMaxTextLength(43);
    }
    if (width > 500) {
      setMaxTextLength(50);
    }
    if (width > 550) {
      setMaxTextLength(58);
    }
    if (width > 610) {
      setMaxTextLength(64);
    }
    if (width > 645) {
      setMaxTextLength(70);
    }
    if (width > 767) {
      setMaxTextLength(43);
    }
    if (width > 830) {
      setMaxTextLength(54);
    }
    if (width > 920) {
      setMaxTextLength(65);
    }
    if (width > 1000) {
      setMaxTextLength(79);
    }
  }, [width]);

  const hideText = (text, max) => {
    return text.length < max ? text : text.slice(0, max) + "...";
  };

  return (
    <section className="bg-main-bg h-full overflow-y-auto relative flex flex-col gap-8">
      <div className="fixed md:static top-[90px] bg-main-bg z-30 left-0 w-full p-4 shadow-md flex items-center justify-between">
        <h2 className="text-xl font-semibold text-title">Bildirishnomalar</h2>
        <span class="inline-block text-title ">
          <svg
            width="27"
            height="27"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.4948 6.93497C15.6446 7.06575 15.7364 7.25066 15.7499 7.44906C15.7634 7.64747 15.6975 7.84311 15.5668 7.99297L7.70984 16.993C7.63944 17.0736 7.5526 17.1383 7.45514 17.1825C7.35769 17.2268 7.25188 17.2497 7.14484 17.2497C7.03779 17.2497 6.93199 17.2268 6.83453 17.1825C6.73708 17.1383 6.65023 17.0736 6.57984 16.993L3.43684 13.393C3.31076 13.2425 3.24871 13.0486 3.264 12.8529C3.27929 12.6572 3.37071 12.4753 3.51862 12.3462C3.66654 12.2171 3.85916 12.1512 4.05514 12.1626C4.25112 12.1739 4.43483 12.2617 4.56684 12.407L7.14484 15.36L14.4368 7.00697C14.5676 6.85716 14.7525 6.76542 14.9509 6.75192C15.1493 6.73841 15.345 6.80426 15.4948 6.93497ZM20.5198 7.01997C20.8198 7.30497 20.8308 7.77997 20.5448 8.07997L11.9738 17.08C11.899 17.1586 11.8079 17.22 11.707 17.26C11.6061 17.3 11.4977 17.3176 11.3893 17.3116C11.2809 17.3057 11.1751 17.2762 11.0792 17.2253C10.9833 17.1745 10.8996 17.1034 10.8338 17.017L10.4048 16.454C10.2925 16.3075 10.2381 16.1247 10.2521 15.9406C10.2661 15.7565 10.3475 15.584 10.4808 15.4562C10.614 15.3284 10.7897 15.2542 10.9743 15.2479C11.1588 15.2416 11.3392 15.3036 11.4808 15.422L19.4588 7.04497C19.596 6.90102 19.7847 6.81741 19.9835 6.81254C20.1822 6.80766 20.3748 6.88192 20.5188 7.01897"
              fill={isDark ? "#FFFFFF" : "#000000"}
            />
          </svg>
        </span>
      </div>
      <div className="bildirishnomalar mt-[80px] md:mt-0 px-5 flex flex-col gap-8">
        <div className="oqilmagan bildirishnomalar">
          <p className="text-center text-lighter-text text-[17px]">
            O`qilmagan
          </p>
          <div className="flex flex-col gap-4">
            {unread.map((unr) => {
              return (
                <div
                  key={unr.id}
                  className="bg-[#0061FF17]  rounded-xl h-[80px] p-4 relative overflow-hidden"
                >
                  <span className="absolute inline-block top-0 left-0 w-1 h-full bg-blue-first"></span>
                  <h2 className="text-title font-semibold">Tizim</h2>
                  <div className="flex flex-3 justify-between items-center text-main-text">
                    <p>{hideText(unr.message, maxTextLength)}</p>
                    <p className="text-lighter-text">{unr.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="oqilgan-bildirishnomalar pb-5">
          <p className="text-center text-lighter-text text-[17px]">O`qilgan</p>
          <div className="flex flex-col gap-4">
            {read.map((r) => {
              return (
                <div
                  key={r.id}
                  className="bg-main-bg border border-notification-border  rounded-xl h-[80px] p-4 relative overflow-hidden"
                >
                  <h2 className="text-title font-semibold">Tizim</h2>
                  <div className="flex flex-3 justify-between items-center text-lighter-text">
                    <p>{hideText(r.message, maxTextLength)}</p>
                    <p className="text-lighter-text">{r.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bildirishnomalar;
