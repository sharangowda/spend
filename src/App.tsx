import { Navibar } from "./pages/Navbar";
import DivCards from "./pages/DivCards";
import ChartComponent from "./pages/ChartComponent";

function App() {
  return (
    <>
      <div className="mx-5 border-b-2 lg:mx-10">
        <Navibar />
      </div>
      <div className="mx-5 border-b-2">
        <DivCards />
      </div>
      <div className="mx-5 border-b-2">
        <ChartComponent />
      </div>
      <div className="flex mt-5 text-sm font-light justify-center item-center">
        <footer className="my-2">Made using shadcn and typescript.</footer>
      </div>
    </>
  );
}

export default App;
