import { useEffect, useState } from "react";
import Menu from "./componentes/Menu/Menu";
import Navbar from "./componentes/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "./componentes/Carrito/Carrito";
import Inicio from "./componentes/Inicio/Inicio";
import pedirPizza, {
  obtenerCarrito,
  actualizarCarrito,
} from "./componentes/pedirPizza";

function App() {
  const usuarioId = "usuario123"; // ID fijo de ejemplo
  const [pizzaItem, setPizzaItem] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    pedirPizza().then((res) => {
      setPizzaItem(res);
    });
    // Obtener carrito del backend al iniciar
    obtenerCarrito(usuarioId)
      .then((res) => {
        setCarrito(res?.items || []);
      })
      .catch(() => setCarrito([]));
  }, []);

  const syncCarrito = (nuevoCarrito) => {
    actualizarCarrito(usuarioId, nuevoCarrito)
      .then((res) => setCarrito(res.items || []))
      .catch(() => setCarrito(nuevoCarrito));
  };

  const agregarAlCarrito = (id) => {
    // Buscar si la pizza ya está en el carrito
    const index = carrito.findIndex((item) => item.pizza === id);
    let nuevoCarrito;
    if (index !== -1) {
      // Si ya existe, suma cantidad
      nuevoCarrito = [...carrito];
      nuevoCarrito[index].cantidad += 1;
    } else {
      // Si no existe, agrega nueva
      nuevoCarrito = [...carrito, { pizza: id, cantidad: 1 }];
    }
    console.log(
      "Agregando pizza al carrito:",
      id,
      "Nuevo carrito:",
      nuevoCarrito
    );
    syncCarrito(nuevoCarrito);
  };

  const restarAlCarrito = (id) => {
    const index = carrito.findIndex((item) => item.pizza === id);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      if (nuevoCarrito[index].cantidad > 1) {
        nuevoCarrito[index].cantidad -= 1;
      } else {
        nuevoCarrito.splice(index, 1);
      }
      syncCarrito(nuevoCarrito);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/menu"
            element={
              <Menu
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
                usuarioId={usuarioId}
                syncCarrito={syncCarrito}
              />
            }
          />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
