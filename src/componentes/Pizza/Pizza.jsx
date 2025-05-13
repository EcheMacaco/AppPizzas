import "./Pizza.css";
import { pizzaImg } from "../../Img/Img.jsx";


const Pizza = ({pizzaItem}) =>
   (
   <div className="pizza-card">
    <h1 > {pizzaItem.nombre} </h1>
    <img src={pizzaImg[pizzaItem.nombre]} alt={pizzaItem.nombre} />
    <p > {"$" + pizzaItem.precio} </p>
    <p > {"ingredientes: " + pizzaItem.ingredientes} </p>
  
  </div>
);

// Pizza es un componente que recibe un objeto pizzaItem como props y muestra su nombre, imagen, precio e ingredientes.


export default Pizza;