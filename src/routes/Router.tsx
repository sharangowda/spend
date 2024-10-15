import App from "@/App";
import { DialogBox } from "@/pages/AddExpenses/Expenses";
import { createBrowserRouter, Routes, Route, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/addExpenses", element: <DialogBox /> }],
  },
]);

export default router;
