import Menu from "../Menu/Menu";

const PizzaItem = ({
  pizzaItem,
  agregarAlCarrito,
  restarAlCarrito,
  carrito,
}) => {
  return (
    <>
      <div>
        <Menu
          pizzaItem={pizzaItem}
          agregarAlCarrito={agregarAlCarrito}
          restarAlCarrito={restarAlCarrito}
          carrito={carrito}
        />
      </div>
    </>
  );
};

export default PizzaItem;
