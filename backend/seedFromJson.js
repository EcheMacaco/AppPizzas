const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Pizza = require("./models/Pizza");

// Leer el archivo pizzas.json
const pizzasPath = path.join(__dirname, "../src/data/pizzas.json");
const pizzasJson = JSON.parse(fs.readFileSync(pizzasPath, "utf-8"));

// Convertir el formato del JSON al formato del modelo de MongoDB
const pizzas = pizzasJson.map((p) => ({
  nombre: p.nombre,
  ingredientes: p.ingredientes,
  precio: p.precio,
  imagen:
    p.imagen ||
    "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
}));

mongoose
  .connect("mongodb://localhost:27017/app_pizzas")
  .then(async () => {
    await Pizza.deleteMany({});
    await Pizza.insertMany(pizzas);
    console.log("Pizzas del JSON insertadas en MongoDB");
    mongoose.disconnect();
  })
  .catch((err) => console.error(err));
