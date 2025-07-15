const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// ✅ Rutas válidas primero
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "API funcionando correctamente" });
});

// ✅ Middleware de 404 al final
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

module.exports = app;
