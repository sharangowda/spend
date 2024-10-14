import { SelectCharts } from "./SelectCharts";
import { PieChartComponent } from "./Piechart";
import { Tables } from "./Tables";
import { BarHori } from "./Barchart-hori";
import { BarVert } from "./Barchart-vert";

function ChartComponent() {
  return (
    <>
      <div className="flex flex-col m-3 md:flex-row">
        <div className="md:flex md:flex-row md:justify-around items-center md:w-screen">
          <div>
            <div className="p-3">
              <SelectCharts />
            </div>
            <div className="p-3">
              <BarVert />
            </div>
          </div>
          <div className="md:mt-10 md:w-84">
            <Tables />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartComponent;
