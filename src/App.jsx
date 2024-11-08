import React, { useContext, useEffect } from "react";
import Header from "./Component/Header";
import { MainDataContext } from "./utils/DataContext";
import { Outlet } from "react-router-dom";

function App() {
  let { MainApiFetch } = useContext(MainDataContext);

  useEffect(() => {
    MainApiFetch();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
