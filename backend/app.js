require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexión:", err));

app.use("/api/pizzas", require("./routes/pizzas"));
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/carrito", require("./routes/carrito"));
app.use("/api/ordenes", require("./routes/ordenes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor backend en puerto ${PORT}`));
