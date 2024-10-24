"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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
import React from "react";

const chartConfig = {
  amount: {
    label: "Amount",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function BarVert() {
  const [chart, setChart] = React.useState<
    { invoice: string; amount: number }[]
  >([]);
  React.useEffect(() => {
    const response = async () => {
      const res = await getAllInvoices();
      setChart(res);
    };
    response();
  }, []);
  console.log(chart);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Total amount per bill</CardTitle>
        <CardDescription>This Year</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
          <BarChart accessibilityLayer data={chart}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="invoice"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 9)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            {chart.length > 0 && (
              <Bar dataKey="amount" fill="#2563eb" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            )}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
