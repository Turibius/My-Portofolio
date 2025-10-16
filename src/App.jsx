import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Project from "./pages/Projects";
function App() {


  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </main>
    </>
  )
}

export default App
