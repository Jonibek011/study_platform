import React, { memo } from "react";
//icons
import { TiStarFullOutline } from "react-icons/ti";

import goldCup from "../../assets/student/asosiy/gold-cup.png";
import silverCup from "../../assets/student/asosiy/silver-cup.png";
import bronzeCuup from "../../assets/student/asosiy/bronze-cup.png";
const leaders = [
  {
    rank: 1,
    avatar: "https://i.pravatar.cc/150?img=3", // yoki null
    name: "Javoxir Abdukarimov",
    startDate: "21.12.2024",
    rating: 43,
    medal: [goldCup],
  },
  {
    rank: 2,
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Oxunjon Olimov",
    startDate: "21.12.2024",
    rating: 41,
    medal: [silverCup],
  },
  {
    rank: 3,
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Laziz Lazizov",
    startDate: "21.12.2024",
    rating: 35,
    medal: [bronzeCuup],
  },
  {
    rank: 4,
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Anvar Atabayev",
    startDate: "21.12.2024",
    rating: 28,
  },
  {
    rank: 5,
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Muhammad Sharifboyev",
    startDate: "21.12.2024",
    rating: 21,
  },
  {
    rank: 6,
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Suhrob Ahmedov",
    startDate: "21.12.2024",
    rating: 18,
  },
  {
    rank: 7,
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Ilhom Zokirov",
    startDate: "21.12.2024",
    rating: 16,
  },
  {
    rank: 8,
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Jahongir Olimov",
    startDate: "21.12.2024",
    rating: 15,
  },
  {
    rank: 9,
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Doston Allanazarov",
    startDate: "21.12.2024",
    rating: 12,
  },
];

const TeacherReytingBoard = memo(function TeacherReytingBoard() {
  return (
    <div className="bg-main-bg rounded-xl relative z-10  overflow-x-auto">
      <div className="min-w-[640px]">
        <div className="table-title p-5 flex flex-col gap-0 ">
          <div className="flex justify-between">
            <h2 className="text-title font-bold text-2xl">
              Peshqadamlar jadvali
            </h2>
            <select
              defaultValue="Darsni tanlang"
              className="select rounded-xl text-lighter-text text-[16px] bg-input-bg"
            >
              <option disabled={true}>Darsni tanlang</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
          <p className="font-normal text-title">Matematika 1-modul</p>
        </div>
        <div className="">
          <table className="table table-zebra ">
            {/* head */}
            <thead>
              <tr className="text-title">
                <th></th>
                <th>№</th>
                <th>Avatar</th>
                <th>Foydalanuvchilar</th>
                <th>Boshlash sanasi</th>
                <th>Reytingi</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader) => {
                return (
                  <tr
                    key={leader.rank}
                    className="hover:bg-table-hover text-table-text"
                  >
                    <th>
                      {leader?.medal && <img src={leader.medal} alt="#"></img>}
                    </th>
                    <td>{leader.rank}</td>
                    <td>
                      <img
                        src={leader.avatar}
                        alt=""
                        className="w-7 h-7 rounded-full"
                      />
                    </td>
                    <td>{leader.name}</td>
                    <td>{leader.startDate}</td>
                    <td className="flex items-center gap-2">
                      <span>
                        <TiStarFullOutline className="w-5 h-5  text-[#FFD21D]" />
                      </span>{" "}
                      {leader.rating}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

export default TeacherReytingBoard;
