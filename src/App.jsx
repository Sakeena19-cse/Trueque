import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Matching from "./pages/Matching";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Quiz from "./pages/Quiz";
import Session from "./pages/Session";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/session" element={<Session />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;