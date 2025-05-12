import "./Pizza.css";
const Pizza = ({pedido}) =>
   (<div className="pizza-store">
   <div className="pizza-card">
    <h1 > {pedido.nombre} </h1>
    <img src={pedido.imagen} alt={pedido.nombre} />
    <p > {"$" + pedido.precio} </p>
    <p > {"ingredientes: " + pedido.ingredientes} </p>
  </div>
  </div>
);


export default Pizza;