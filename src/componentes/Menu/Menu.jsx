import Pizza from "../Pizza/Pizza";
import "./Menu.css";

// Menu.jsx
// Este componente es responsable de mostrar una lista de pizzas.
// Recibe un array de objetos pizzaItem como props y utiliza el componente Pizza para mostrar cada pizza individualmente.
// El componente itera sobre el array pizzaItem y renderiza un componente Pizza para cada elemento, pasando las propiedades necesarias.
const Menu = ({ pizzaItem, agregarAlCarrito }) => {
  return (
    <div className="pizza-store">
      {pizzaItem.length > 0 &&
        pizzaItem.map((pizzaItem) => {
          return (
            <div key={pizzaItem.id}>
              <Pizza pizzaItem={pizzaItem} agregarAlCarrito={agregarAlCarrito} />
            </div>
          );
        })}
    </div>
  );
};
// Menu es un componente que recibe un array de objetos pizzaItem como props y muestra una lista de pizzas utilizando el componente Pizza.
export default Menu;
