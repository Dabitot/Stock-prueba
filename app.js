const express = require('express')

const app = express()

app.get('/', (req, res) =>{
console.log('peticion recibida desde explorador')
res.send('<h1>hola mundo </h1>')

})

app.listen(4000,() => {
    console.log('servidor escuchando en el puerto 4000')
})