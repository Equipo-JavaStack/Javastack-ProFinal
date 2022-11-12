const mongoose= require("mongoose");

const productosScheme = mongoose.Schema({
    id: String,
    nombre: String,
    apellido:  String,
    identificacion: String,
    correo: String,
    pass: String,
    usuario: String
})

module.exports = mongoose.model('usuarios',productosScheme)