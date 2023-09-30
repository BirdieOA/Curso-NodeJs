const express = require('express')
const biblioteca = require('./lovecraft/biblioteca')
const path = require('path')
const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
//     if (req.method !== 'POST') return next()
//     if (req.headers['content-type'] !== 'application/json') return next()
// //solo llegan request que son POST y que tienen el header content-type: application/json
//     let body = ''

//     //escuchar el evento data
//     req.on('data', chunk => {
//       body += chunk.toString()
//     })
//     req.on ('end', () => {
//       const data = JSON.parse(body)
//       data.timestamp = Date.now()
//      //mutar la request y meter la informacion en el req.body
//      req.body = data
//      next()
//     })
// })


app.get('/lovecraft/biblioteca', (req, res) => {
  res.json(biblioteca)
})

app.post('/lovecraft', (req, res) => {
           res.status(201).json(req.body)
          })


          app.use((req, res) => {
            res.status(404).send('<h1>ERROR 404</h1>')
          })


app.listen(PORT, () => {
  console.log(`servidor escuchando el puerto ➡️ http://localhost:${PORT}`)
})