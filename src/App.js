import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./pages/incio";
import Proyectos from "./pages/proyectos";
import Contacto from "./pages/contacto";
import NotFound from "./pages/notFound";
import SocialDjango from "./components/proyectos/SocialDjango";
import OwnInfinity from "./components/proyectos/OwnInfinity";
import OwnDark from "./components/proyectos/OwnDark";
import AllSkills from "./components/proyectos/AllSkills";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/inicio" element={<Inicio />} />
        <Route exact path="/proyectos" element={<Proyectos />} />
        <Route exact path="/proyectos/social" element={<SocialDjango />} />
        <Route exact path="/proyectos/infinity" element={<OwnInfinity />} />
        <Route exact path="/proyectos/dark" element={<OwnDark />} />
        <Route exact path="/proyectos/all" element={<AllSkills />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
