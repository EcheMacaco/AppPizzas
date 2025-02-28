import data from "../data/pizzas.json";

const pedirProducto = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export default pedirProducto;
