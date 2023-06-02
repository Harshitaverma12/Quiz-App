import React from "react";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login-Signup/Login";
import Header from "./Components/Common/Header";
import SignUp from "./Components/Login-Signup/SignUp";
import SidebarDashboard from "./Components/Sidebar/SidebarDashboard";
import Footer from "./Components/Common/Footer";
function App() {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/SidebarDashboard"
            element={<SidebarDashboard />}
          />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
