import React from "react";
import { useWindowSize } from "../../hooks/optimizationHooks/useWindowSize";
import { useContextSelector } from "use-context-selector";
import { DarkModeContext } from "../../context/DarkModeContext";
import TeacherReytingBoard from "../../components/teacher/TeacherRatingBoard";
import UserList from "../../components/teacher/UserList";
//rasmlar
import card1 from "../../assets/teacher/dashboard/image 18.png";
import card2 from "../../assets/teacher/dashboard/image 17.png";
import card3 from "../../assets/teacher/dashboard/image 19.png";
import card4 from "../../assets/teacher/dashboard/image 20.png";
function Dashboard() {
  const { width } = useWindowSize();
  const isDark = useContextSelector(DarkModeContext, (ctx) => ctx.isDark);

  return (
    <section className="w-full h-full overflow-y-auto p-2 md:py-5 ">
      <div className="main-container w-full h-full flex flex-col gap-4 xl:gap-6">
        <div className="hello-section col-span-full  w-full bg-gradient-to-r from-blue-first to-blue-second flex flex-col gap-1 p-5 rounded-xl">
          <h2 className="text-white font-bold text-xl md:text-2xl">
            Nasiba, O'qituvchi sahifasiga xush kelibsiz
          </h2>
          <p className="font-normal   text-gray-200">
            Darslarni yarating, o'quvchilaringiz uchun vazifalar tayyorlang va
            ularni baholash jarayonini boshqaring
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
                  Yaratilgan darslar
                </h3>
                <p className="text-4xl font-bold text-[#00BA00]">12 ta</p>
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
                  Yaratilgan topshiriqlar
                </h3>
                <p className="text-4xl font-bold text-[#0022FF]">8 ta</p>
              </div>
            </div>

            {/* ========================= Third card =========================================================== */}
            <div className="card bg-main-bg p-5 relative flex flex-col gap-2 overflow-hidden ">
              <img
                src={card3}
                className="absolute right-0 w-[100px] z-0 bottom-0"
                alt=""
              />
              <div className="relative z-10">
                <h3 className="font-normal text-[20px] text-title">
                  Yaratilgan testlar
                </h3>
                <p className="text-4xl font-bold text-[#AD1FFF]">42 ta</p>
              </div>
            </div>

            {/* ========================= Last card =========================================================== */}
            <div className="card bg-main-bg p-5 relative flex flex-col gap-2 overflow-hidden">
              <img
                src={card4}
                className="absolute right-0 w-[143px] h-[96px] z-0"
                alt=""
              />
              <div className="relative z-10">
                <h3 className="font-normal text-[20px] text-title">
                  Umumiy o'quvchilar
                </h3>
                <p className="text-4xl font-bold text-[#E8BA02]">12 ta</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` lg:flex  ${width < 1380 && "flex-col"} gap-4 xl:gap-8`}
        >
          <div className="flex-1 pb-5">
            <TeacherReytingBoard />
          </div>
          <div className="flex-1 pb-5 ">
            <UserList />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
