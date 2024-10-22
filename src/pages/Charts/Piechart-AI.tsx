"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getAllInvoices } from "@/utils/allInvoicesChartUtil";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const chart1 = [
  {
    invoice: "sharan",
    amount: 100000,
    fill: "var(--color-sharan)",
  },
  {
    invoice: "divya",
    amount: 100000,
    fill: "var(--color-divya)",
  },
  {
    invoice: "harish",
    amount: 100,
    fill: "var(--color-harish)",
  },
  {
    invoice: "divya",
    amount: 8912,
    fill: "var(--color-divya)",
  },
  {
    invoice: "shran",
    amount: 123123,
    fill: "var(--color-shran)",
  },
  {
    invoice: "Sharan",
    amount: 12322,
    fill: "var(--color-Sharan)",
  },
  {
    invoice: "Divya",
    amount: 22334,
    fill: "var(--color-Divya)",
  },
  {
    invoice: "Sharan",
    amount: 1000,
    fill: "var(--color-Sharan)",
  },
  {
    invoice: "Kar",
    amount: 45634,
    fill: "var(--color-Kar)",
  },

  {
    invoice: "Again",
    amount: 222,
    fill: "var(--color-Again)",
  },

  {
    invoice: "Specs",
    amount: 10000,
    fill: "var(--color-Specs)",
  },
];

const chartConfig1 = {
  amount: {
    label: "Amount",
  },
  sharan: {
    label: "sharan",
    color: "hsl(147,31%,56%)",
  },
  divya: {
    label: "divya",
    color: "hsl(2,55%,86%)",
  },
  harish: {
    label: "harish",
    color: "hsl(117,38%,27%)",
  },
  shran: {
    label: "shran",
    color: "hsl(75,49%,45%)",
  },
  Sharan: {
    label: "Sharan",
    color: "hsl(290,54%,36%)",
  },
  Divya: {
    label: "Divya",
    color: "hsl(10,58%,34%)",
  },
  Kar: {
    label: "Kar",
    color: "hsl(197,22%,47%)",
  },

  Again: {
    label: "Again",
    color: "hsl(323,86%,65%)",
  },

  Specs: {
    label: "Specs",
    color: "hsl(257,1%,32%)",
  },
} satisfies ChartConfig;

export function PieAI() {
  const [chart, setChart] = React.useState<
    { invoice: any; amount: any; fill: string }[]
  >([]);
  const [chartConfig, setChartConfig] = React.useState(
    {} satisfies ChartConfig
  );
  React.useEffect(() => {
    const response = async () => {
      const res = await getAllInvoices();
      setChart(res);
    };
    response();
  }, []);
  console.log(chart);
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig1}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chart1}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            ></Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
