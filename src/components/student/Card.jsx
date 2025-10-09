import React, { memo } from "react";
import { cn } from "../util/cn";
import clsx from "clsx";
import { Link } from "react-router-dom";

//react icons
import { FiExternalLink } from "react-icons/fi";
//main function
const Card = memo(function Card({ className = "", card, ...rest }) {
  return (
    <div
      key={card.id}
      className={cn(`card bg-main-bg overflow-hidden rounded-xl`, className)}
      {...rest}
    >
      <div className="card-header w-full md:h-[300px] lg:h-[200px] xl:h-[300px] relative">
        <img src={card.image} alt="" className="w-full h-full object-cover" />
        <div className="teacher-info absolute left-5 bottom-5 flex  gap-3 items-center">
          <div className="teacher-img w-9 h-9 rounded-full">
            <img
              src={card.userPhoto || <Loading />}
              alt=""
              className="w-auto h-full rounded-full object-cover"
            />
          </div>
          <p className="md:text-lg text-white">{card.teacher}</p>
          <Link>
            <FiExternalLink className="w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
      <div className="card-body p-5 flex flex-col gap-2 relative">
        <span className="absolute border-none top-5 right-3 badge lg:badge-sm xl:badge-md px-4 py-4 rounded-full bg-[#D8E7FF] text-blue-first text-[15px] font-semibold">
          Boshlang'ich
        </span>
        <h2 className="text-xl text-title font-bold">{card.title}</h2>
        <p className="text-lg text-lightest-text">{card.subtitle}</p>
        {card.progress ? (
          <div className="progres flex flex-col gap-1">
            <div className="progress w-full relative h-[7px] bg-[#E3E3E3] rounded-full ">
              <span
                style={{ width: card.progress + "%" }}
                className={clsx(
                  `inline-block absolute top-0 left-0 h-full    `,
                  {
                    "bg-[#FFBF00]": card.progress >= 50 && card.progress < 100,

                    "bg-[#FF0D0D]": card.progress < 50,
                    "bg-[#10B981]": card.progress === 100,
                  }
                )}
              ></span>
            </div>
            <p className="text-lightest-text text-[13px] font-normal">
              Yakunlandi: {card.progress}%
            </p>
          </div>
        ) : (
          <br />
        )}
        <div className="button flex justify-between">
          <Link
            to={`/student/darslar/${card.id}`}
            className="btn shadow-none border-none rounded-full px-8 font-normal bg-blue-first hover:to-blue-second text-white"
          >
            Boshlash
          </Link>

          {card.progress && (
            <span
              className={`font-medium text-[16px] inline-block self-end ${
                card.progress === 100 ? "text-[#10B981]" : "text-[#FFBF00]"
              }`}
            >
              {card.progress === 100 ? "Tugagan" : "Boshlangan"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

export default Card;
