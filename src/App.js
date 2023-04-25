import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./pages/incio";
import Proyectos from "./pages/proyectos";
import Contacto from "./pages/contacto";
import NotFound from "./pages/notFound";
import Navbar from "./components/navBar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/inicio" element={<Inicio />} />
        <Route exact path="/proyectos" element={<Proyectos />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
