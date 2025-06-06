import "./Carrito.css";
import { crearOrden } from "../pedirPizza";

export const Carrito = ({
  carrito = [],
  pizzaItem = [],
  setCarrito,
  usuarioId,
  syncCarrito,
}) => {
  // Contar cuántas veces aparece cada pizza y su cantidad
  const contador = {};
  carrito.forEach((item) => {
    if (item && item.pizza) {
      contador[item.pizza] = (contador[item.pizza] || 0) + (item.cantidad || 1);
    }
  });

  // Mostrar solo las pizzas que están en el carrito
  const pizzasEnCarrito = pizzaItem.filter((pizza) => contador[pizza._id]);

  // Calcular el total por cada pizza y el total general
  let totalCompra = 0;

  const getTotalPorPizza = (pizza) => {
    const total = pizza.precio * contador[pizza._id];
    totalCompra += total;
    return total;
  };

  // Función para restar una unidad de una pizza y sincronizar con backend
  const restarUnidad = (id) => {
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

  const handleConfirmarCompra = async () => {
    try {
      await crearOrden(usuarioId, carrito);
      alert("¡Compra confirmada!");
      setCarrito([]); // Vacía el carrito tras la compra
    } catch (error) {
      alert("Error al confirmar la compra");
    }
  };

  return (
    <div>
      <h1>Carrito</h1>
      {pizzasEnCarrito.length > 0 ? (
        pizzasEnCarrito.map((pizza) => (
          <div key={pizza._id} className="carrito-card">
            <h2>{pizza.nombre}</h2>
            <p>Cantidad: {contador[pizza._id]}</p>
            <p>Precio unitario: ${pizza.precio}</p>
            <p>Total: ${getTotalPorPizza(pizza)}</p>
            <button onClick={() => restarUnidad(pizza._id)}>
              QUITAR UNIDAD
            </button>
          </div>
        ))
      ) : (
        <p>No hay productos en el carrito</p>
      )}
      <hr />
      <h2>Total de la compra: ${totalCompra}</h2>
      {carrito.length > 0 && (
        <button
          className="btn-confirmar-compra"
          onClick={handleConfirmarCompra}
        >
          Confirmar compra
        </button>
      )}
    </div>
  );
};
export default Carrito;
// Ahora el componente Carrito muestra el total por pizza y el total general de la compra.
