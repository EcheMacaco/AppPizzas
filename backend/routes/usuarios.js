const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// Registrar usuario
router.post("/register", async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    const usuario = new Usuario({ nombre, email, password });
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login usuario (básico, sin JWT)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ email, password });
  if (!usuario)
    return res.status(401).json({ error: "Credenciales inválidas" });
  res.json(usuario);
});

module.exports = router;
