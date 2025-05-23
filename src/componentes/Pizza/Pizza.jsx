import "./Pizza.css";
import { pizzaImg } from "../../Img/Img.jsx";

// Pizza.jsx
// Este componente es responsable de mostrar la información de una pizza individual.
// Recibe un objeto pizzaItem como props y muestra su nombre, imagen, precio e ingredientes.
const Pizza = ({ pizzaItem }) => (
  <div className="pizza-card">
    <h1> {pizzaItem.nombre} </h1>
    <img src={pizzaImg[pizzaItem.nombre]} alt={pizzaItem.nombre} />
    <p> {"$" + pizzaItem.precio} </p>
    <p> {"ingredientes: " + pizzaItem.ingredientes} </p>
  </div>
);

export default Pizza;
