const mongoose = require("mongoose");

const OrdenSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  items: [
    {
      pizza: { type: mongoose.Schema.Types.ObjectId, ref: "Pizza" },
      cantidad: { type: Number, default: 1 },
    },
  ],
  total: Number,
  estado: { type: String, default: "pendiente" },
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Orden", OrdenSchema);
