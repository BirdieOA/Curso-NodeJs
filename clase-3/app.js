const express = require("express"); // require --> commonsjs
const lovecraft = require('./biblioteca.json')

const app = express();
app.disable("x-powered-by"); // Desabilitar el header X-Powered-by: Express

app.get("/", (req, res) => {
  res.json({ message: "escuchando 🌼" });
});

// Todos los recursos que sean Lovecraft se identificar con /lovecraft
app.get('/lovecraft', (req, res) => {
  res.json(lovecraft)
})

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto http://localhost:${PORT}`);
});
