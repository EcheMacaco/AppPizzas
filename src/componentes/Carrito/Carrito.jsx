import "./Carrito.css";

export const Carrito = ({ carrito = [], pizzaItem = [], setCarrito }) => {
  // Contar cuántas veces aparece cada id en el carrito
  const contador = {};
  carrito.forEach((id) => {
    contador[id] = (contador[id] || 0) + 1;
  });

  // Mostrar solo las pizzas que están en el carrito
  const pizzasEnCarrito = pizzaItem.filter((pizza) => contador[pizza.id]);

  // Calcular el total por cada pizza y el total general
  let totalCompra = 0;

  const getTotalPorPizza = (pizza) => {
    const total = pizza.precio * contador[pizza.id];
    totalCompra += total;
    return total;
  };

  // Función para restar una unidad de una pizza
  const restarUnidad = (id) => {
    const index = carrito.indexOf(id);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <div>
      <h1>Carrito</h1>
      {pizzasEnCarrito.length > 0 ? (
        pizzasEnCarrito.map((pizza) => (
          <div key={pizza.id} className="carrito-card">
            <h2>{pizza.nombre}</h2>
            <p>Cantidad: {contador[pizza.id]}</p>
            <p>Precio unitario: ${pizza.precio}</p>
            <p>Total: ${getTotalPorPizza(pizza)}</p>
            <button onClick={() => restarUnidad(pizza.id)}>
              QUITAR UNIDAD
            </button>
          </div>
        ))
      ) : (
        <p>No hay productos en el carrito</p>
      )}
      <hr />
      <h2>Total de la compra: ${totalCompra}</h2>
    </div>
  );
};
export default Carrito;
// Ahora el componente Carrito muestra el total por pizza y el total general de la compra.
