import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Matching from "./pages/Matching";
import Session from "./pages/Session";
import Quiz from "./pages/Quiz";
import Calendar from "./pages/Calendar";
import Whiteboard from "./pages/Whiteboard";
import Certificate from "./pages/Certificate";
import Reviews from "./pages/Reviews";
import Skills from "./pages/Skills";
import Chat from "./pages/Chat";
import Progress from "./pages/Progress";
import Achievements from "./pages/Achievements";
import Help from "./pages/Help";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/matching" element={<Matching />} />
            <Route path="/session" element={<Session />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/whiteboard" element={<Whiteboard />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}