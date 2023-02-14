import "../src/styles/global.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { todolistContext } from "./states/todolist";
import Sidebar from "./components/sidebar/Sidebar";
import React, { useState } from 'react'
import Dashboard from "./pages/dashboard/Dashboard";
import { tododata } from "./assets/tododata";

function Router() {
  const [todolist, setTodolist] = useState(tododata)
  return (
    <BrowserRouter>
      <>
        <Sidebar />
        <todolistContext.Provider value={{todolist,setTodolist}}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </todolistContext.Provider>
      </>

    </BrowserRouter>
  );
}

export default Router;
