import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { useSelector } from "react-redux";

function App() {
  const isPageLoading = useSelector((state)=>state.auth.isPageLoading)
  return (
    <>
       {!isPageLoading && <Header />}
      <main className={`w-screen h-screen overflow-y-auto ${!isPageLoading ? "pt-16":"pt-0"} bg-slate-100 dark:bg-slate-800`}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
