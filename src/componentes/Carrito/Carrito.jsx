export const Carrito = ({ carrito = [], pizzaItem = [], setCarrito }) => {
  // Contar cuántas veces aparece cada id en el carrito
  const contador = {};
  carrito.forEach((id) => {
    contador[id] = (contador[id] || 0) + 1;
  });

  // Mostrar solo las pizzas que están en el carrito
  const pizzasEnCarrito = pizzaItem.filter((pizza) => contador[pizza.id]);

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
          <div key={pizza.id}>
            <h2>{pizza.nombre}</h2>
            <p>Cantidad: {contador[pizza.id]}</p>
            <button onClick={() => restarUnidad(pizza.id)}>-</button>
          </div>
        ))
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};
export default Carrito;
// Ahora el componente Carrito muestra la cantidad de cada pizza agregada al carrito dando la posibilidad de restar unidades.
