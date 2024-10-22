"use client";
import { Bar, BarChart, Pie, PieChart, ResponsiveContainer } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const newChartConfig = {
  count: {
    label: "Count",
  },
  paid: {
    label: "Paid",
    color: "hsl(var(--chart-1))",
  },
  unpaid: {
    label: "Unpaid",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const dataChart = [
  {
    status: "Paid",
    count: 7,
    fill: "var(--color-paid)",
  },
  {
    status: "Unpaid",
    count: 6,
    fill: "var(--color-unpaid)",
  },
];

export function TestPie() {
  return (
    <ChartContainer config={newChartConfig} className="min-h-[200px] w-full">
      <PieChart width={400} height={400}>
        <Pie
          data={dataChart}
          dataKey={"count"}
          cx="50%"
          cy="50%"
          fill="#8884d8"
        />
      </PieChart>
    </ChartContainer>
  );
}
