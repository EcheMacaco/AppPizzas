import { useEffect, useState } from "react";
import pedirPizza from "../pedirPizza";
import Menu from "../Menu/Menu";

const PizzaItem = () => {
  const [pizzaItem, setPizzaItem] = useState([]);

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
