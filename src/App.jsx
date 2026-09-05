import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Matching from "./pages/Matching";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import Session from "./pages/Session";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/matching" element={<Matching />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/session" element={<Session />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;