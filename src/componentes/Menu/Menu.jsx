import Pizza from "../Pizza/Pizza";

const Menu = ({ pedidos }) => {
  return (
    <div>
      {pedidos.length > 0 &&
        pedidos.map((pedido) => {
          return (
            <div>
              <Pizza pedido={pedido} />
            </div>
          );
        })}
    </div>
  );
};
export default Menu;
