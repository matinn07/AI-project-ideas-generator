import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import About from "./pages/About";

export default function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <h1>AI Project Ideas Generator</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/history">History</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}
