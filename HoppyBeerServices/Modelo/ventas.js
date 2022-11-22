const mongoose= require("mongoose");

const productosScheme = mongoose.Schema({
    id: String,
    nombreProducto: String,
    cantidad:  String,
    fechaVenta: String,
    cliente: String,
    estado: Boolean
})

module.exports = mongoose.model('ventas',productosScheme)