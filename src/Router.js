import "../src/styles/global.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";

import Dashboard from "./pages/dashboard/Dashboard";

function Router() {

  return (
    <BrowserRouter>
    
      <>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </>

    </BrowserRouter>
  );
}

export default Router;
