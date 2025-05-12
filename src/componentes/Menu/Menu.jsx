import Pizza from "../Pizza/Pizza";
import "./Menu.css";

const Menu = ({ pedidos }) => {
  return (
    <div>
      {pedidos.length > 0 &&
        pedidos.map((pedido) => {
          return (console.log(pedido),
            <div key={pedido.id}>
              
              <Pizza pedido={pedido} />
            </div>
          );
        })}
    </div>
  );
};
export default Menu;
