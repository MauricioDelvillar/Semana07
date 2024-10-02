const express = require('express')
const app = express()

const db = require('./db')

//seteamos el motor de plantillas ejs
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const clientes = require('./routes/clientes')
const insumo = require('./routes/insumo')
const proveedores = require('./routes/proveedor')
app.use(clientes)
app.use(proveedores)
app.use(insumo)

app.use(express.static('public'))

app.listen(4000, ()=>{
    console.log('¡Server UP! en http://localhost:4000')
})

