import { Navbar } from "./pages/Navbar";
import DivCards from "./pages/Cards/DivCards";
import ChartComponent from "./pages/Charts/ChartComponent";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <div className="mx-5 border-b-2 lg:mx-10">
        <Navbar />
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
      <Toaster />
    </>
  );
}

export default App;

//todo:
//backend calls
//skeletons (maybe)
