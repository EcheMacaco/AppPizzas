const mongoose = require("mongoose");

const CarritoSchema = new mongoose.Schema({
  usuario: { type: String, required: true }, // Cambiado de ObjectId a String
  items: [
    {
      pizza: { type: mongoose.Schema.Types.ObjectId, ref: "Pizza" },
      cantidad: { type: Number, default: 1 },
    },
  ],
});

module.exports = mongoose.model("Carrito", CarritoSchema);
