const express = require('express') // require --> commonsjs

const app = express()
app.disable('x-powered-by') // Desabilitar el header X-Powered-by: Express

app.get('/', (req, res) => {
  res.json({ message: 'escuchando 🌼' })
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto http://localhost:${PORT}`)
})
