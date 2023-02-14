import "../src/styles/global.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { todolistContext } from "./states/todolist";
import Sidebar from "./components/sidebar/Sidebar";
import React, { useEffect, useState } from 'react'
import Dashboard from "./pages/dashboard/Dashboard";
// import { tododata } from "./assets/tododata";
import MyTodolist from "./pages/mytodolist/MyTodolist";

function Router() {
  const [todolist, setTodolist] = useState([])
  useEffect(() => {
    console.info(todolist)
  }, [todolist])
  return (
    <BrowserRouter>
      <>
        <Sidebar />
        <todolistContext.Provider value={{todolist,setTodolist}}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mytodolist" element={<MyTodolist />} />
          </Routes>
        </todolistContext.Provider>
      </>

    </BrowserRouter>
  );
}

export default Router;
