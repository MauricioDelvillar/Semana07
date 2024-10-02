const Proveedor = require('../model/Proveedor'); // Asegúrate de que el nombre del modelo coincida con tu archivo de modelo

// Mostrar todos los proveedores
module.exports.mostrar = (req, res) => {
    Proveedor.find({}, (error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los proveedores'
            });
        }
        return res.render('proveedor', { proveedor: proveedor }); // Asegúrate de que la vista esté configurada
    });
};

// Crear proveedor
module.exports.crear = (req, res) => {
    const proveedor = new Proveedor({
        nombre: req.body.nombre, // Asegúrate de que este campo coincide con tu modelo
    });
    
    proveedor.save(function(error, proveedor) {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el proveedor'
            });
        }
        res.redirect('/proveedor'); // Redirigir a la lista de proveedores después de crear
    });
};

// Editar proveedor
module.exports.editar = (req, res) => {
    const id = req.body.id_editar.trim();
    const nombre = req.body.nombre_editar; // Asegúrate de que este campo coincide con tu modelo
    
    Proveedor.findByIdAndUpdate(id, { nombre }, (error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando el proveedor',
                error: error.message
            });
        }
        res.redirect('/proveedor'); // Redirigir a la lista de proveedores después de editar
    });
};

// Borrar proveedor
module.exports.borrar = (req, res) => {
    const id = req.params.id;
    
    Proveedor.findByIdAndRemove(id, (error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando el proveedor'
            });
        }
        res.redirect('/proveedor'); // Redirigir a la lista de proveedores después de eliminar
    });
};
