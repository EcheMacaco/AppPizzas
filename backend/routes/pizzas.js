const express = require("express");
const router = express.Router();
const Pizza = require("../models/Pizza");

// Obtener todas las pizzas
router.get("/", async (req, res) => {
  const pizzas = await Pizza.find();
  res.json(pizzas);
});

module.exports = router;
