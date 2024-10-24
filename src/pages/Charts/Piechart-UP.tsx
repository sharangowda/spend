"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";
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
import { getPaid } from "@/utils/getPaidUnpaid";

const chartConfig = {
  count: {
    label: "Paid",
  },
  paid: {
    label: "Paid",
    color: "hsl(46, 100%, 50%)",
  },
  unpaid: {
    label: "Unpaid",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function PieUP() {
  const [chart, setChart] = React.useState<
    { status: string; count: number; fill: string }[]
  >([]);

  React.useEffect(() => {
    const response = async () => {
      const res = await getPaid();
      setChart(res);
    };
    response();
  }, []);
  console.log(chart);
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Paid and Unpaid Bills</CardTitle>
        <CardDescription>This Year</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px] w-full"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            {chart.length > 0 && (
              <Pie
                data={chart}
                dataKey="count"
                nameKey="status"
                innerRadius={80}
                strokeWidth={5}
              ></Pie>
            )}
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
