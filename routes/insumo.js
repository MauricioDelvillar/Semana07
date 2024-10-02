const express = require('express')
const router = express.Router()

const insumoController = require('../controllers/insumocontroller')

//Mostrar todos los clientes (GET)
router.get('/insumo', insumoController.mostrar)

//Crear cliente (POST)
router.post('/insumo/crear', insumoController.crear)

//Editar cliente (POST)
router.post('/insumo/editar', insumoController.editar)

//Borrar cliente (GET)
router.get('/insumo/borrar/:id', insumoController.borrar)

module.exports = router