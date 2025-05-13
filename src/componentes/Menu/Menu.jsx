import Pizza from "../Pizza/Pizza";
import "./Menu.css";

const Menu = ({ pizzaItem }) => {
  return (
    <div>
      {pizzaItem.length > 0 &&
        pizzaItem.map((pizzaItem) => {
          return (
            <div className="pizza-store" key={pizzaItem.id}>
              <Pizza  pizzaItem={pizzaItem} />
            </div>
          );
        })}
    </div>
  );
};
// Menu es un componente que recibe un array de objetos pizzaItem como props y muestra una lista de pizzas utilizando el componente Pizza.
export default Menu;
