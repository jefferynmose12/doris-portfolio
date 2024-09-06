import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/home/Home";
import Projects from "./screen/projects/Projects";
import ProjectsDetails from "./screen/projects/ProjectsDetails";

function App() {

  return (
    <BrowserRouter>
      <div className="mx-auto max-w-[1800px]">
        <Routes>
          <Route path="/about" element={<Home />} />
          <Route index path="/" element={<Projects />} />
          <Route path="/details/:id" element={<ProjectsDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
