const express = require("express");
const router = express.Router();
const Orden = require("../models/Orden");

// Crear una orden
router.post("/", async (req, res) => {
  const { usuario, items, total } = req.body;
  try {
    const orden = new Orden({ usuario, items, total });
    await orden.save();
    res.json(orden);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las órdenes de un usuario
router.get("/usuario/:usuarioId", async (req, res) => {
  const ordenes = await Orden.find({ usuario: req.params.usuarioId }).populate(
    "items.pizza"
  );
  res.json(ordenes);
});

module.exports = router;
