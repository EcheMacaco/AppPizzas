const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
  nombre: String,
  ingredientes: [String],
  precio: Number,
  imagen: String,
});

module.exports = mongoose.model("Pizza", PizzaSchema);