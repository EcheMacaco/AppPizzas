const Pizza = ({pedido}) => (
  <div>
    <h1> {pedido.nombre} </h1>
    <h2> {"$" + pedido.precio} </h2>
    <h3> {"ingredientes: " + pedido.ingredientes} </h3>
  </div>
);

export default Pizza;