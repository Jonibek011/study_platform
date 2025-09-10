import React, { memo } from "react";
import { cn } from "../util/cn";

//icons
import { LuSearch } from "react-icons/lu";

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
];
const UserList = memo(function UserList({ className = "", ...rest }) {
  return (
    <section
      {...rest}
      className={cn(
        `w-full h-full bg-main-bg  rounded-xl overflow-x-auto `,
        className
      )}
    >
      <div className="min-w-[640px]">
        <div className="py-4 md:py-8 px-5 flex justify-between items-center border-b border-header-border">
          <h2 className="text-xl font-bold lg:text-2xl text-title">
            O'quvchilar ro'yxati
          </h2>
          <label className="input rounded-xl text-[16px] text-title placeholder:text-lighter-text bg-input-bg  border-input-border">
            <input type="search" className="" placeholder="Qidirish" />
            <LuSearch className="w-5 h-5" />
          </label>
        </div>
        <div>
          <table className="table table-zebra">
            <thead>
              <tr className="text-title">
                <th>Foydalanuchilar</th>
                <th>Boshlash sanasi</th>
                <th>CHat</th>
                <th>Dars</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr
                    key={user.id}
                    className="hover:bg-table-hover text-table-text"
                  >
                    <td>{user.userName}</td>
                    <td>{user.startDate}</td>
                    <td>telegram</td>
                    <td>{user.dars}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
});

export default UserList;
