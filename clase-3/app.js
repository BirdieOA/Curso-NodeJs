const express = require("express"); // require --> commonsjs
const crypto = require('node:crypto')
const lovecraft = require("./biblioteca.json");

const app = express();
app.use(express.json())
app.disable("x-powered-by"); // Desabilitar el header X-Powered-by: Express

app.get("/", (req, res) => {
  res.json({ message: "Escuchando 🌼" });
});

// Todos los recursos que sean LOVECRAFT se identifican con /lovecraft
app.get("/lovecraft", (req, res) => {
  const { genero } = req.query
  if(genero) {
    const filteredBooks = lovecraft.filter(
      book => book.genero.some(g => g.toLowerCase() === genero.toLowerCase())
    )
    return res.json(filteredBooks)
  }
  res.json(lovecraft);
});

app.get('/lovecraft/:id', (req, res) => {
  const { id } = req.params 
  const biblioteca = lovecraft.find(biblioteca => biblioteca.id === id)
  if (biblioteca) return res.json(biblioteca)

  res.status(400).json({message:'Libro no encontrado'})
})

app.post("/lovecraft", (req, res) => {
  const {
      titulo,
      año,
      descripcion,
      foto_de_portada,
      genero,
  } = req.body;

  const nuevoLibro = {
    id: crypto.randomUUID(), //UUID v4
     titulo,
      año,
      descripcion,
      foto_de_portada,
      genero,
  }
  lovecraft.push(nuevoLibro)

  res.status(201).json(nuevoLibro)

})

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`El servidor escucha en el puerto http://localhost:${PORT}`);
});