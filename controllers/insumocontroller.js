const Insumo = require('../model/Insumo'); // Asegúrate de que el nombre del modelo coincida con tu archivo de modelo
const Proveedor = require('../model/Proveedor');
// Mostrar todos los insumos
// Mostrar todos los insumos
module.exports.mostrar = (req, res) => {
    Insumo.find({})
        .populate('idproveedor') // Poblar la referencia al proveedor
        .exec((error, insumos) => {
            if (error) {
                console.error('Error al obtener insumos:', error); // Detalle del error
                return res.status(500).json({ message: 'Error mostrando los insumos' });
            }
            console.log(insumos);

            Proveedor.find({}, (error, proveedores) => {
                if (error) {
                    console.error('Error al obtener proveedores:', error); // Detalle del error
                    return res.status(500).json({ message: 'Error mostrando los proveedores' });
                }

                return res.render('insumo', { insumos, proveedores });
            });
        });
};

// Crear insumo
module.exports.crear = (req, res) => {
    const insumo = new Insumo({
        nombre: req.body.nombre, // Corregido
        idproveedor: req.body.idproveedor,
        precio: req.body.precio, // Corregido
        stock: req.body.stock
    });
    
    insumo.save(function(error, insumo) {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el insumo'
            });
        }
        res.redirect('/insumo'); // Redirigir a la lista de insumos después de crear
    });
};

// Editar insumo
module.exports.editar = (req, res) => {
    const id = req.body.id_editar.trim();
    const nombre = req.body.nombre_editar; // Corregido
    const idproveedor = req.body.idproveedor_editar;
    const precio = req.body.precio_editar; // Corregido
    const stock = req.body.stock_editar;
    
    Insumo.findByIdAndUpdate(id, { nombre, idproveedor, precio, stock }, (error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando el insumo',
                error: error.message
            });
        }
        res.redirect('/insumo'); // Redirigir a la lista de insumos después de editar
    });
};

// Borrar insumo
module.exports.borrar = (req, res) => {
    const id = req.params.id;
    
    Insumo.findByIdAndRemove(id, (error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando el insumo'
            });
        }
        res.redirect('/insumo'); // Redirigir a la lista de insumos después de eliminar
    });
};
