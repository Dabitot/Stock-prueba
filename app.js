require('dotenv').config()
const express = require('express')


const app = express()

app.get('/', (req, res) =>{
console.log('peticion recibida desde explorador')
res.status(200).send( '<h1>hola mundo hoy </h1>')

})
const PORT = process.env.PORT

app.listen(PORT,() => {
    console.log('servidor escuchando en el puerto',PORT)
})