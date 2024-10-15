import { SelectCharts } from "../SelectCharts";
import { PieChartComponent } from "./Piechart";
import { Tables } from "../Tables";
import { BarHori } from "./Barchart-hori";
import { BarVert } from "./Barchart-vert";
import client from "@/lib/client";
import { RecordModel } from "pocketbase";
import { useState, useEffect } from "react";

function ChartComponent() {
  const [data, setData] = useState<RecordModel[]>([]);
  useEffect(() => {
    const timeoutFetch = setTimeout(async () => {
      const response = await client.collection("expenses").getFullList();
      setData(response);
    }, 2000);
    return () => clearTimeout(timeoutFetch);
  }, []);
  return (
    <>
      <div className="flex flex-col m-3 md:flex-row">
        <div className="md:flex md:flex-row md:justify-around items-center md:w-screen">
          <div>
            <div className="p-3">
              <SelectCharts />
            </div>
            <div className="p-3 md:h-full">
              <BarVert />
            </div>
          </div>
          <div className="md:mt-10 md:w-1/4">
            <Tables data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartComponent;
