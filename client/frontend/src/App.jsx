import Dashboard from "./pages/dashboardPage";
import Login from "./pages/loginPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homePage";
import Projects from "./pages/projectsPage";
import Certificates from "./pages/certificatesPage";
import Details from "./pages/detailsPage";
import Skills from "./pages/skillsPage";
import About from "./pages/aboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/admin/*" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="details" element={<Details />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
