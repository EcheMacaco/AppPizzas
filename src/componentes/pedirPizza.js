// Esta función obtiene la lista de pizzas desde el backend
const pedirPizza = async () => {
  const response = await fetch("http://localhost:4000/api/pizzas");
  if (!response.ok) throw new Error("Error al obtener las pizzas");
  return await response.json();
};

// Obtener el carrito de un usuario
export const obtenerCarrito = async (usuarioId) => {
  const response = await fetch(`http://localhost:4000/api/carrito/${usuarioId}`);
  if (!response.ok) throw new Error("Error al obtener el carrito");
  return await response.json();
};

// Actualizar el carrito de un usuario
export const actualizarCarrito = async (usuarioId, items) => {
  const response = await fetch(`http://localhost:4000/api/carrito/${usuarioId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });
  if (!response.ok) throw new Error("Error al actualizar el carrito");
  return await response.json();
};

// Crear una orden de compra
export const crearOrden = async (usuarioId, items) => {
  const response = await fetch("http://localhost:4000/api/ordenes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario: usuarioId, items }),
  });
  if (!response.ok) throw new Error("Error al crear la orden");
  return await response.json();
};

export default pedirPizza;
