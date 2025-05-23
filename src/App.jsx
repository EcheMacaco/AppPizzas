import PizzaItem from "./componentes/PizzaItem/PizzaItem";
import Navbar from "./componentes/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./componentes/Nosotros/Nosotros";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/inicio" element={<PizzaItem />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
