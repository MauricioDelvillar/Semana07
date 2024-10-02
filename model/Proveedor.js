const mongoose = require('mongoose')
const Schema = mongoose.Schema

const proveedorSchema = new Schema({
    nombre: {type: String, required: true, maxlength: 50}
}, {versionKey: false});

module.exports = mongoose.model('proveedor', proveedorSchema);