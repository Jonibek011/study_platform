import React, { memo, useState } from "react";
import { cn } from "../util/cn";

//icons
import { LuSearch } from "react-icons/lu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const users = [
  {
    id: 1,
    userName: "Javoxir Abdukarimov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 2,
    userName: "Oxunjon Olimov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 3,
    userName: "Laziz Lazizov",
    startDate: "21.12.2024",
    dars: "Geometriyaga kirish",
  },
  {
    id: 4,
    userName: "Anvar Atabayev",
    startDate: "21.12.2024",
    dars: "Geometriyaga kirish",
  },
  {
    id: 5,
    userName: "Muhammad Sharifboyev",
    startDate: "21.12.2024",
    dars: "Triganometriya va tenglamalar",
  },
  {
    id: 6,
    userName: "Suhrob Ahmedov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 7,
    userName: "Ilhom Zokirov",
    startDate: "21.12.2024",
    dars: "Triganometriya va tenglamalar",
  },
  {
    id: 8,
    userName: "Jaxongir Olimov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 9,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Triganometriya va tenglamalar",
  },
  {
    id: 10,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 11,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 12,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 13,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 14,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 15,
    userName: "Javoxir Abdukarimov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 16,
    userName: "Oxunjon Olimov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 17,
    userName: "Laziz Lazizov",
    startDate: "21.12.2024",
    dars: "Geometriyaga kirish",
  },
  {
    id: 18,
    userName: "Anvar Atabayev",
    startDate: "21.12.2024",
    dars: "Geometriyaga kirish",
  },
  {
    id: 19,
    userName: "Muhammad Sharifboyev",
    startDate: "21.12.2024",
    dars: "Triganometriya va tenglamalar",
  },
  {
    id: 20,
    userName: "Suhrob Ahmedov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 21,
    userName: "Ilhom Zokirov",
    startDate: "21.12.2024",
    dars: "Triganometriya va tenglamalar",
  },
  {
    id: 22,
    userName: "Jaxongir Olimov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 23,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Triganometriya va tenglamalar",
  },
  {
    id: 24,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 25,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 26,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 27,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
  {
    id: 28,
    userName: "Akbar Sobirov",
    startDate: "21.12.2024",
    dars: "Matematika 1-modul",
  },
];
//icon
import { LiaTelegram } from "react-icons/lia";
import { Link } from "react-router-dom";
//main-function
const UserList = memo(function UserList({ className = "", ...rest }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;

  const currentItems = users.slice(startIndex, endIndex);

  const allPages = Math.ceil(users.length / itemsPerPage);

  return (
    <section
      {...rest}
      className={cn(
        `w-full h-full bg-main-bg  rounded-xl overflow-x-auto overflow-y-hidden `,
        className
      )}
    >
      <div className="min-w-[640px] h-[90%] flex flex-col">
        <div className="py-4 md:py-8 px-5 flex justify-between items-center border-b border-header-border  ">
          <h2 className="text-xl font-bold lg:text-2xl text-title">
            O'quvchilar ro'yxati
          </h2>
          <label className="input rounded-xl text-[16px] text-title placeholder:text-lighter-text bg-input-bg  border-input-border">
            <input
              type="search"
              className="text-title"
              placeholder="Qidirish"
            />
            <LuSearch className="w-5 h-5" />
          </label>
        </div>
        <div className="min-h-[86%] flex-1">
          <table className="table table-zebra ">
            <thead>
              <tr className="text-title">
                <th>Foydalanuchilar</th>
                <th>Boshlash sanasi</th>
                <th>CHat</th>
                <th>Dars</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((user) => {
                return (
                  <tr
                    key={user.id}
                    className="hover:bg-table-hover text-table-text"
                  >
                    <td>{user.userName}</td>
                    <td>{user.startDate}</td>
                    <td>
                      <Link>
                        <LiaTelegram className="border border-darslar-border rounded-sm p-[2px] w-7 h-7 text-[#374DBC]" />
                      </Link>
                    </td>
                    <td>{user.dars}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center gap-3 p-2">
          <button
            onClick={() =>
              setCurrentPage((prev) => {
                return (prev -= 1);
              })
            }
            disabled={currentPage === 1}
            className=" w-6 h-6 bg-main-bg border rounded-sm flex justify-center items-center border-header-border disabled:opacity-20 disabled:bg-main-bg "
          >
            <IoIosArrowBack className="w-5 h-5 text-lighter-text" />
          </button>
          {Array.from({ length: allPages }, (item, index) => (
            <button
              onClick={() => setCurrentPage(index + 1)}
              className={`font-bold cursor-pointer  ${
                currentPage === index + 1
                  ? "text-[#374DBC]"
                  : "text-lighter-text"
              }`}
              key={index}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === allPages}
            onClick={() =>
              setCurrentPage((prev) => {
                return (prev += 1);
              })
            }
            className="  w-6 h-6 bg-main-bg border rounded-sm flex justify-center items-center border-header-border disabled:opacity-20 disabled:bg-main-bg"
          >
            <IoIosArrowForward className="w-5 h-5 text-lighter-text" />
          </button>
        </div>
      </div>
    </section>
  );
});

export default UserList;
