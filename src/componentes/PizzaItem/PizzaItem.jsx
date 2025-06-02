import Menu from "../Menu/Menu";

const PizzaItem = ({ pizzaItem, agregarAlCarrito }) => {
  return (
    <>
      <div>
        <Menu pizzaItem={pizzaItem} agregarAlCarrito={agregarAlCarrito} />
      </div>
    </>
  );
};

export default PizzaItem;
