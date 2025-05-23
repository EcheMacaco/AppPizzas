import { useEffect, useState } from "react";
import pedirPizza from "../pedirPizza";
import Menu from "../Menu/Menu";

const PizzaItem = () => {
  // useState es un hook que permite crear un estado en el componente
  // pizzaItem es el estado y setPizzaItem es la funcion que permite modificarlo
  const [pizzaItem, setPizzaItem] = useState([]);

  // con usefect se hace la llamada a la api
  // y se guarda en el estado pizzaItem

  useEffect(() => {
    pedirPizza().then((res) => {
      setPizzaItem(res);
    });
  }, []);

  return (
    <>
      <Menu key={pizzaItem.id} pizzaItem={pizzaItem} />
    </>
  );
};

export default PizzaItem;
