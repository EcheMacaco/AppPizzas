const express = require("express");
const router = express.Router();
const Carrito = require("../models/Carrito");

// Obtener el carrito de un usuario
router.get("/:usuarioId", async (req, res) => {
  const carrito = await Carrito.findOne({ usuario: req.params.usuarioId });
  res.json({ items: carrito ? carrito.items : [] });
});

// Actualizar el carrito de un usuario
router.put("/:usuarioId", async (req, res) => {
  const { items } = req.body;
  const carrito = await Carrito.findOneAndUpdate(
    { usuario: req.params.usuarioId },
    { usuario: req.params.usuarioId, items },
    { new: true, upsert: true }
  );
  res.json({ items: carrito.items });
});

module.exports = router;
