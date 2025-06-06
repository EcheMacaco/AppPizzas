const mongoose = require("mongoose");
const Pizza = require("./models/Pizza");

const pizzas = [
  {
    nombre: "Margarita",
    ingredientes: ["Queso mozzarella", "Salsa de tomate", "Albahaca"],
    precio: 1200,
    imagen:
      "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
  },
  {
    nombre: "Pepperoni",
    ingredientes: ["Queso mozzarella", "Salsa de tomate", "Pepperoni"],
    precio: 1400,
    imagen:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
  },
  {
    nombre: "Cuatro Quesos",
    ingredientes: ["Mozzarella", "Parmesano", "Gorgonzola", "Queso azul"],
    precio: 1500,
    imagen:
      "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
  },
];

mongoose
  .connect("mongodb://localhost:27017/app_pizzas")
  .then(async () => {
    await Pizza.deleteMany({});
    await Pizza.insertMany(pizzas);
    console.log("Pizzas de ejemplo insertadas");
    mongoose.disconnect();
  })
  .catch((err) => console.error(err));
