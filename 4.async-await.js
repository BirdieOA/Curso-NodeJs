//Esto solo en modulos nativos
//que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

//asincrono secuencial

const fs = require('node:fs/promises')

console.log('primer archivo...')
fs.readFile('./archivo.txt','utf-8') 
  .then(text => {
console.log('primer texto:', text)
  })


console.log('hacer cosas mientras lee el archivo...')


console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8')
.then(text => {
   console.log('segundo texto:', text)
})
 