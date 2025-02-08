import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Layout from "./common/Layout";
import AddStudent from "./pages/AddStudent";
import OverView from "./pages/OverView";
import CheckStudent from "./pages/CheckStudent";
import Update from "./pages/Update";
import axios from "axios";

const App = () => {
  const [activePage, setActivePage] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [students, setStudents] = useState([]);

  async function fetchStudents() {
    let reqOptions = {
      url: "http://localhost:3001/students",
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      },
    };

    let response = await axios.request(reqOptions);
    setStudents(response.data);
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/system" element={<Layout activePage={activePage} />}>
          <Route
            path=""
            element={<Dashboard setActivePage={setActivePage} />}
          />
          <Route
            path="dashboard"
            element={<Dashboard setActivePage={setActivePage} />}
          />
          <Route
            path="check-student"
            element={<CheckStudent setActivePage={setActivePage} />}
          />
          <Route
            path="add-student"
            element={<AddStudent setActivePage={setActivePage} />}
          />
          <Route
            path="update-student"
            element={<Update setActivePage={setActivePage} />}
          />
          <Route
            path="overview"
            element={<OverView students={students} fetchStudents={fetchStudents} setActivePage={setActivePage} />}
          />
        </Route>

        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
