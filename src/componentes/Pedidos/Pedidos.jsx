import { useEffect, useState } from "react";
import pedirProducto from "../pedirProducto";
import Menu from "../Menu/Menu";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    pedirProducto().then((res) => {
      setPedidos(res);
    });
  }, []);

  return (
    <>
      <Menu key={pedidos.id} pedidos={pedidos} />
    </>
  );
};

export default Pedidos;
