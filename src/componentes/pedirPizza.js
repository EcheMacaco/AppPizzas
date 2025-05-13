import data from "../data/pizzas.json";

const pedirPizza = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export default pedirPizza;
