import { useEffect, useState } from "react";
import PizzaItem from "./componentes/PizzaItem/PizzaItem";
import Navbar from "./componentes/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./componentes/Nosotros/Nosotros";
import Carrito from "./componentes/Carrito/Carrito";
import Inicio from "./componentes/Inicio/Inicio";
import pedirPizza from "./componentes/pedirPizza";

function App() {
  const [pizzaItem, setPizzaItem] = useState([]);
  const [carrito, setCarrito] = useState(() => {
    // Leer carrito de localStorage al iniciar
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    pedirPizza().then((res) => {
      setPizzaItem(res);
    });
  }, []);

  useEffect(() => {
    // Guardar carrito en localStorage cada vez que cambie
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (id) => {
    setCarrito([...carrito, id]);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route
            path="/menu"
            element={
              <PizzaItem
                pizzaItem={pizzaItem}
                agregarAlCarrito={agregarAlCarrito}
              />
            }
          />
          <Route
            path="/carrito"
            element={
              <Carrito
                carrito={carrito}
                pizzaItem={pizzaItem}
                setCarrito={setCarrito}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
