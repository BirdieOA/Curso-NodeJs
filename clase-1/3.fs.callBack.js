const fs = require('node:fs')

console.log('primer archivo...🌼') 
fs.readFile('./archivo.txt','utf-8', (err, text) => {
  console.log(text)
})

console.log('hacer cosas mientras lee el archivo...')


console.log('Leyendo el segundo archivo...🔥')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log(text)
})


