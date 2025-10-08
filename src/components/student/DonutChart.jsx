import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Yashil qism", value: 80 },
  { name: "Qizil qism", value: 20 },
];

const COLORS = ["#11C994", "#EF4444"];

export default function DonutChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const greenValue = data[0].value;
  const greenPercent = ((greenValue / total) * 100).toFixed(0);

  return (
    <div className="flex flex-col items-center  justify-center relative w-[220px] h-[220px]">
      {/* Chart */}
      <PieChart width={180} height={180}>
        <Pie
          data={data}
          cx="50%"
          cy="55%"
          innerRadius={50}
          outerRadius={80}
          dataKey="value"
          startAngle={20}
          endAngle={450}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      {/* O‘rtadagi foiz */}
      <div className="absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-63%] text-3xl font-semibold text-title">
        {greenPercent}%
      </div>

      {/* Pastdagi legenda */}
      <div className="flex gap-6 mt-4  items-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#11C994] rounded "></div>
          <span className="whitespace-nowrap text-title ">
            To'g'ri javoblar - 20
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#EF4444] rounded"></div>
          <span className="whitespace-nowrap font-medium text-title">
            Xato javoblar - 5
          </span>
        </div>
      </div>
    </div>
  );
}
