import Pizza from "../Pizza/Pizza";
import "./Menu.css";

// Menu.jsx
// Este componente es responsable de mostrar una lista de pizzas.
// Recibe un array de objetos pizzaItem como props y utiliza el componente Pizza para mostrar cada pizza individualmente.
// El componente itera sobre el array pizzaItem y renderiza un componente Pizza para cada elemento, pasando las propiedades necesarias.
const Menu = ({
  pizzaItem,
  agregarAlCarrito,
  restarAlCarrito,
  carrito = [],
}) => {
  // Calcular la cantidad de cada pizza por _id
  const contador = {};
  carrito.forEach((item) => {
    if (item && item.pizza) {
      contador[item.pizza] = (contador[item.pizza] || 0) + (item.cantidad || 1);
    }
  });

  return (
    <div className="pizza-store">
      {pizzaItem.length > 0 &&
        pizzaItem.map((pizza) => {
          const cantidad = contador[pizza._id] || 0;
          return (
            <div key={pizza._id}>
              <Pizza
                pizzaItem={pizza}
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
