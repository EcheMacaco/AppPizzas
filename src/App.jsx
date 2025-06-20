import { useEffect, useState } from "react";
import PizzaItem from "./componentes/PizzaItem/PizzaItem";
import Navbar from "./componentes/Navbar/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";
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

  const restarAlCarrito = (id) => {
    const index = carrito.indexOf(id);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            path="/menu"
            element={
              <PizzaItem
                pizzaItem={pizzaItem}
                agregarAlCarrito={agregarAlCarrito}
                restarAlCarrito={restarAlCarrito}
                carrito={carrito}
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
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
