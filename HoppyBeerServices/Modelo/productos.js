const mongoose= require("mongoose");

const productosScheme = mongoose.Schema({
    id: String,
    nombreProducto: String,
    descripcion:  String,
    costo: String,
    venta: String,
    stock: String,
    imagen: String
})

module.exports = mongoose.model('productos',productosScheme)