import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import { Bar, BarChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { MoveRight } from "lucide-react";

function Home() {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  return (
    <div className="mb-2 p-2 w-full  overflow-x-hidden overflow-y-hidden">
      <div className="grid grid-cols-2 grid-rows-3 gap-3">
        <div className="rounded-md col-span-2 text-white bg-white max-h-[400px]">
          <ChartContainer config={chartConfig} className="w-full h-full p-2">
            <BarChart accessibilityLayer data={chartData}>
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>

        <div className="col-start-2 row-start-2 bg-white rounded-md min-h-[200px] p-3">
          <div className="flex flex-col justify-between h-full overflow-x-hidden">
            <h1 className="font-bold">NeuroAI</h1>
            <div className="flex gap-2">
              <div className="bg-green-200 w-80 h-70 rounded-md mt-2 p-2 text-sm">
                <h2>Do you want to get a report on the latest acitivties ?</h2>
                <br></br>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque molestiae vero temporibus facilis optio laudantium consequatur dicta porro! Earum reprehenderit similique, harum in iste dolor perferendis porro! Doloribus, quos voluptates?</p>
              </div>
              <div className="bg-blue-200 w-80 h-70 rounded-md mt-2"></div>
            </div>

            <div className="rounded-2xl mt-2 flex items-center gap-1">
              <Input placeholder="Ask me anything" className={"rounded-2xl focus:bg-white"} />
              <MoveRight className={"rounded-2xl bg-blue-500 p-1"} />
            </div>
          </div>
        </div>

        <div className="col-start-1 row-start-2 bg-white rounded-md min-h-[200px] p-3">
          <div className="flex justify-between">
            <h2>Recent Actvities</h2>
            <h2>See all -</h2>
          </div>
        </div>

        <div className="col-start-2 row-start-3 bg-white rounded-md min-h-[200px]"></div>
        <div className="col-start-1 row-start-3 bg-white rounded-md min-h-[200px]"></div>
      </div>
    </div>
  );
}

export default Home;
