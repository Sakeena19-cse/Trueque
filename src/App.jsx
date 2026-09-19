import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Matching from "./pages/Matching";
import Quiz from "./pages/Quiz";
import Session from "./pages/Session";
import Whiteboard from "./pages/Whiteboard";

function App() {
  return (
    <BrowserRouter>

      <div className="app-shell">

        <Header />

        <main>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/matching"
              element={<Matching />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/quiz"
              element={<Quiz />}
            />

            <Route
              path="/session"
              element={<Session />}
            />

            <Route
              path="/whiteboard"
              element={<Whiteboard />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;