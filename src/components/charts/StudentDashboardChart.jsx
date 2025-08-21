import React from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useContextSelector } from "use-context-selector";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "1", hours: 2.8 },
  { day: "2", hours: 3.2 },
  { day: "3", hours: 3.1 },
  { day: "4", hours: 5.2 },
  { day: "5", hours: 5.7 },
  { day: "6", hours: 6.2 },
  { day: "7", hours: 3.5 },
  { day: "8", hours: 4.0 },
  { day: "9", hours: 5.2 },
  { day: "10", hours: 1.5 },
  { day: "11", hours: 0 },
  { day: "12", hours: 0 },
  { day: "13", hours: 0.5 },
  { day: "14", hours: 3.0 },
  { day: "15", hours: 3.3 },
  { day: "16", hours: 4.0 },
  { day: "17", hours: 2.3 },
  { day: "18", hours: 2.0 },
  { day: "19", hours: 4.7 },
];

function StudentDashboardChart() {
  const isDark = useContextSelector(DarkModeContext, (ctx) => ctx.isDark);
  return (
    <div className="w-full h-full overflow-x-auto overflow-y-hidden md:overflow-x-visible   rounded-xl shadow  bg-main-bg">
      <h2 className="text-lg font-medium mb-4 bg-table-hover p-4 text-title ">
        So‘ngi oydagi faollik
      </h2>
      <div className="w-full h-[80%] min-h-[30vh] min-w-[600px] md:min-w-auto pe-5 bg-main-bg">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              label={{
                value: "Iyul",
                position: "insideBottomLeft",
                offset: -4,
              }}
            />
            <YAxis
              label={{ value: "soat", angle: -90, position: "insideLeft" }}
              ticks={[1, 2, 3, 4, 5, 6, 7, 8]}
              domain={[0, 8]}
            />
            <Tooltip />
            <Bar
              dataKey="hours"
              fill={`${isDark ? "#06592D" : "#16a34a"}`}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StudentDashboardChart;
