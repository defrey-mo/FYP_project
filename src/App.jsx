import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Layout from "./common/Layout";
import AddStudent from "./pages/AddStudent";
import OverView from "./pages/OverView";
import CheckStudent from "./pages/CheckStudent";
import Update from "./pages/Update";

const App = () => {
  const [activePage, setActivePage] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout activePage={activePage} />}>
          <Route path="dashboard" element={<Dashboard setActivePage={setActivePage} />} />
          <Route path="check-student" element={<CheckStudent setActivePage={setActivePage} />} />
          <Route path="add-student" element={<AddStudent setActivePage={setActivePage} />} />
          <Route path="update-student" element={<Update setActivePage={setActivePage} />} />
          <Route path="overview" element={<OverView setActivePage={setActivePage} />} />
          <Route path="*" element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
