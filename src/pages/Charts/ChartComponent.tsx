import { SelectCharts } from "../SelectCharts";
import { PieUP } from "./Piechart-UP";
import { PieAI } from "./Piechart-AI";
import { Tables } from "../Tables";
import { BarHori } from "./Barchart-hori";
import { BarVert } from "./Barchart-vert";
import client from "@/lib/client";
import { RecordModel } from "pocketbase";
import { useState, useEffect } from "react";
import { getTotalSum } from "@/utils/getTotalSum";

function ChartComponent() {
  const [data, setData] = useState<RecordModel[]>([]);
  const [sum, setSum] = useState<number>(0);
  const [chart, setChart] = useState<string>("Select Chart");

  function getChart(data: string) {
    setChart(data);
  }
  useEffect(() => {
    const timeoutFetch = setTimeout(async () => {
      const response = await client.collection("expenses").getFullList();
      setData(response);
    }, 2000);
    const getAmount = setTimeout(async () => {
      const res = await getTotalSum();
      setSum(res);
    }, 500);

    return () => {
      clearTimeout(timeoutFetch);
      clearTimeout(getAmount);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col m-3 md:flex-row">
        <div className="md:flex md:flex-row md:justify-around items-center md:w-screen">
          <div>
            <div className="p-3">
              <SelectCharts chart={getChart} />
            </div>
            <div className="p-3 md:h-full">
              {chart === "pie-p/u" && <PieUP />}
              {chart === "pie-AI" && <PieAI />}
              {chart === "bar" && <BarVert />}
            </div>
          </div>
          <div className="md:mt-10 md:w-1/4">
            <Tables data={data} amount={sum} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartComponent;
