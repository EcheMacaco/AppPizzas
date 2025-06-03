import Pizza from "../Pizza/Pizza";
import "./Menu.css";

// Menu.jsx
// Este componente es responsable de mostrar una lista de pizzas.
// Recibe un array de objetos pizzaItem como props y utiliza el componente Pizza para mostrar cada pizza individualmente.
// El componente itera sobre el array pizzaItem y renderiza un componente Pizza para cada elemento, pasando las propiedades necesarias.
const Menu = ({ pizzaItem, agregarAlCarrito, restarAlCarrito, carrito = [] }) => {
  // Calcular la cantidad de cada pizza por id
  const contador = {};
  carrito.forEach((id) => {
    contador[id] = (contador[id] || 0) + 1;
  });

  return (
    <div className="pizza-store">
      {pizzaItem.length > 0 &&
        pizzaItem.map((pizzaItem) => {
          const cantidad = contador[pizzaItem.id] || 0;
          return (
            <div key={pizzaItem.id}>
              <Pizza
                pizzaItem={pizzaItem}
                agregarAlCarrito={agregarAlCarrito}
                restarAlCarrito={restarAlCarrito}
                cantidad={cantidad}
              />
            </div>
          );
        })}
    </div>
  );
};
// Menu es un componente que recibe un array de objetos pizzaItem como props y muestra una lista de pizzas utilizando el componente Pizza.
export default Menu;
