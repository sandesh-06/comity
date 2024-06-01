import { Outlet } from "react-router-dom";
import PositionUnderstand from "./PositionUnderstand";
import Header from "./components/Header/Header";
import { BoxEffect } from "./components/ui/BoxEffect";

import HomePage from "./pages/Home/HomePage";
import OpeningPage from "./pages/Opening/OpeningPage";

function App({ children }) {
  return (
    <>
      <Header />
      <main className="w-screen h-screen overflow-y-auto pt-16 bg-slate-100 dark:bg-slate-800">
        <Outlet />
      </main>
    </>
  );
}

export default App;
