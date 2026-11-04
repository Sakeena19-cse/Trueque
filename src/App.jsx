import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Matching from "./pages/Matching";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import Session from "./pages/Session";
import Whiteboard from "./pages/Whiteboard";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Chat from "./pages/Chat";
import Help from "./pages/Help";
import Certificate from "./pages/Certificate";

function App() {
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
            <Route path="/matching" element={<Matching />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/session" element={<Session />} />
            <Route path="/session/:id" element={<Session />} />
            <Route path="/whiteboard" element={<Whiteboard />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/help" element={<Help />} />
            <Route path="/certificate" element={<Certificate />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;