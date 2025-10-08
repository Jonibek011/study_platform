import { memo } from "react";
//images
import card1 from "../../assets/student/asosiy/image 18.png";
import card2 from "../../assets/student/asosiy/image 17.png";
import card3 from "../../assets/student/asosiy/image 16.png";
import card4 from "../../assets/student/asosiy/last-card.png";
import card4Dark from "../../assets/student/asosiy/image 19.png";

import { useWindowSize } from "../../hooks/optimizationHooks/useWindowSize";
//chart
import StudentDashboardChart from "../../components/charts/StudentDashboardChart";
//context
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContextSelector } from "use-context-selector";
//components
import ReytingBoard from "../../components/student/ReytingBoard";
import { Link, Outlet } from "react-router-dom";
import CustomNavLink from "../../components/ui/CustomNavLink";
//main function
const AsosiyStudent = memo(function AsosiyStudent() {
  const { width, height } = useWindowSize();
  const isDark = useContextSelector(DarkModeContext, (ctx) => ctx.isDark);
  return (
    <section className="w-full h-full overflow-y-auto py-3 ">
      <div className="main-container w-full h-full flex flex-col gap-4 xl:gap-6">
        <div className="hello-section col-span-full  w-full bg-gradient-to-r from-blue-first to-blue-second flex flex-col gap-1 p-5 rounded-xl">
          <h2 className="text-white font-bold text-[25px]">
            Xush kelibsiz, Anvar!
          </h2>
          <p className="font-normal  sm:text-lg text-gray-200">
            O`qishni davom ettiring va natijangizni oshiring
          </p>
        </div>
        <div className="overflow-x-auto min-h-[140px] md:min-h-auto md:overflow-x-visible">
          <div className="card-section grid grid-cols-4 overflow-x-auto  min-w-[1400px] md:min-w-auto md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-4 xl:gap-8 ">
            {/* ========================= First card =========================================================== */}
            <div className="card bg-main-bg p-5 relative flex flex-col gap-2 overflow-hidden  ">
              <img
                src={card1}
                className="absolute right-0 top-[50%] translate-y-[-50%] w-[90px] z-0"
                alt=""
              />
              <div className="relative z-10">
                <h3 className="font-normal text-[20px] text-title">
                  O'qilgan darslar
                </h3>
                <p className="text-4xl font-bold text-[#00BA00]">12</p>
                <p className="text-lighter-text">Zo'r, shunday davom eting</p>
              </div>
            </div>

            {/* ========================= Second card =========================================================== */}
            <div className="card bg-main-bg p-5 relative flex flex-col gap-2 overflow-hidden ">
              <img
                src={card2}
                className="absolute right-0 w-[75px] z-0"
                alt=""
              />
              <div className="relative z-10">
                <h3 className="font-normal text-[20px] text-title">
                  Topshiriqlar
                </h3>
                <p className="text-4xl font-bold text-[#00BA00]">8</p>
                <p className="text-lighter-text">Siz buni uddalaysiz</p>
              </div>
            </div>

            {/* ========================= Third card =========================================================== */}
            <div className="card bg-main-bg p-5 relative flex flex-col gap-2 overflow-hidden ">
              <img
                src={card3}
                className="absolute right-0 w-[100px] z-0 top-[50%] translate-y-[-50%]"
                alt=""
              />
              <div className="relative z-10">
                <h3 className="font-normal text-[20px] text-title">Reyting</h3>
                <p className="text-4xl font-bold text-[#FFBF00]">42</p>
                <p className="text-lighter-text">Yanada yaxshiroq bo'ling</p>
              </div>
            </div>

            {/* ========================= Last card =========================================================== */}
            <div className="card bg-main-bg p-5 relative flex flex-col gap-2 overflow-hidden">
              <img
                src={isDark ? card4Dark : card4}
                className="absolute right-0 w-[143px] h-[88px] z-0"
                alt=""
              />
              <div className="relative z-10">
                <h3 className="font-normal text-[20px] text-title">Faollik</h3>
                <p className="text-4xl font-bold text-[#AD1FFF]">12</p>
                <p className="text-lighter-text">Faol bo'lishda davom eting</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`hidden lg:flex  ${
            width < 1380 && "flex-col"
          } gap-4 xl:gap-8`}
        >
          <div className="flex-1 pb-5">
            <ReytingBoard />
          </div>
          <div className="flex-1 pb-5 ">
            <StudentDashboardChart />
          </div>
        </div>

        <div className="block lg:hidden">
          <CustomNavLink
            to="reyting"
            className="btn  outline-none border-none shadow-none h-12  relative bottom-[-10px] z-0  "
            active="bg-main-bg text-blue-first"
            notActive="bg-transparent text-title"
          >
            Peshqadamlar
          </CustomNavLink>
          <CustomNavLink
            to="studentChart"
            className="btn outline-none border-none shadow-none h-12  relative bottom-[-10px] z-0 "
            active="bg-main-bg text-blue-first"
            notActive="bg-transparent text-title"
          >
            Faollik
          </CustomNavLink>
          <div className="w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
});
export default AsosiyStudent;
