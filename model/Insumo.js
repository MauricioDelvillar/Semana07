const mongoose = require('mongoose')
const Schema = mongoose.Schema

const insumoSchema = new Schema({
    nombre: {type: String, required: true, maxlength: 150},
    idproveedor: {type: Schema.Types.ObjectId, ref:'proveedor',required: true},
    precio: { type: Number, required: true }, 
    stock: {type: Number, required: true},
}, {versionKey: false});
//La opción { versionKey: false } en Mongoose se utiliza para desactivar la inclusión del campo __v en los documentos de MongoDB.
module.exports = mongoose.model('insumo', insumoSchema)