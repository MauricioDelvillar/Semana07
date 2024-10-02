const express = require('express')
const router = express.Router()

const proveedorController = require('../controllers/proveedorcontroller')

//Mostrar todos los clientes (GET)

router.get('/proveedor', proveedorController.mostrar)

//Crear cliente (POST)
router.post('/proveedor/crear', proveedorController.crear)

//Editar cliente (POST)
router.post('/proveedor/editar', proveedorController.editar)

//Borrar cliente (GET)
router.get('/proveedor/borrar/:id', proveedorController.borrar)

module.exports = router