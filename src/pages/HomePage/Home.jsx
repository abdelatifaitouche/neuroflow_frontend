


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" 

import React from 'react'
import { Bar, BarChart } from "recharts"
import {ChartContainer } from "@/components/ui/chart"

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
} 

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]


  return (
    <div className="mb-2 p-2 w-[100%] h-full overflow-x-hidden overflow-y-hidden">
      
      <div className="grid grid-cols-4 grid-rows-4 gap-4 h-full">
        <div className="bg-black rounded-md " ></div>
        <div className="col-start-3 row-start-1 bg-black   rounded-md "></div>
        <div className="col-start-2 row-start-1 bg-black   rounded-md "></div>
        <div className="bg-black   rounded-md " ></div>
        <div className="col-span-3 row-span-3 shadow-2xl rounded-md">
        <ChartContainer config={chartConfig} className="h-full p-2 w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
        </div>
        <div className="row-span-3 col-start-4 bg-black    rounded-md"></div>
      </div>
    
    </div>
  )
}

export default Home
