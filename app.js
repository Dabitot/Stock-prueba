require('dotenv').config()
const express = require('express')
const path = require ('path')
const mongoose = require('mongoose')
const { timeStamp } = require('console')

const app = express()

mongoose.set('strictQuery', false)


mongoose.connect(
    `mongodb+srv://Dabito:${process.env.MONGO_DB_PASS}@development.rvx2ecx.mongodb.net/Stock-app?retryWrites=true&w=majority`
    )
    .then(result => console.log("conexion exitosa con el servidor BBDD"))
    .catch((err) => console.log("err"))

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: Number,
},
{timeStamp: true}

)
const Product = mongoose.model('Product', productSchema)

app.use(express.json())


app.post('/api/v1/products',(req, res) =>{

    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price
    })
     
    newProduct
    .save()
    .then((result) => {
        res.status(201).json({ ok: true })
   
})
.catch((err) => console.log(err))
})


app.use(express.static(path.join(__dirname,'public')))
  

const PORT = process.env.PORT

app.listen(PORT,() => {
   console.log(`servidor escuchando en el puerto ${PORT}`)
})