import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Goals from "./Goals";
import Projects from "./projects"
import Contact from "./Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Homepage />} />
          <Route path="goals" element={<Goals />} />
          <Route exact path="projects" element={<Projects />} />
    <Route exact path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}