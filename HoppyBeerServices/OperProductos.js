const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const BD = require("./Conexion/conexion");
const esquemaProductos = require("./Modelo/productos.js");
const { updateOne } = require("./Modelo/productos.js");
const productos = require("./Modelo/productos");
const ventas = require("./Modelo/ventas.js");

const CORS= require("Cors")// incluimos esta linea para controlar el acceso a puertos

//Constates para usar express
const port = 5000;
const app = express();
app.use(CORS());
app.use(express.json());


//conctar bd
mongoose.connect(BD.mongoURL, { useNewUrlParser: true })
/*mongoose.connect('mongodb+srv://JavaStack:javastack@javastack-cluster.q3mytge.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifieldTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    }).then(()=>{
*/
        app.listen(port, () => {
            console.log("Ejecuto la app en el puerto " + port)
    })


//get AdminLista de todos los productos

app.get('/productos', (req, res) => {
    esquemaProductos.find(function (err, esquemaProductos) {
        if (err) return console.err(err)
        
        res.status(500).json(esquemaProductos);
        //res.send(esquemaProductos);
    })

})

//get Clientes lista de los productos con stock
app.get('/productosStock', (req, res) => {
    esquemaProductos.find({ stock: { $gte: 01 } }, function (err, esquemaProductos) {
        if (err) return console.err(err)
        res.send(esquemaProductos);
    })

})

//post para crear nuevos productos



//put para actualizar el stock
app.put('/modificarStock', (req, res) => {
    //id del producto a modifcar
    //nueva cantidad de stock

    esquemaProductos.updateOne({ id: "03" }, { stock: "800" }, function (err) {
        if (err) return console.error(err);

    })
    res.send("Dato Actualizado")

})

//put para actulziar los productos
app.post('/modificarAll',( req , res ) =>{
    const {id, nombreProducto, descripcion,costo,venta,stock, imagen} = req.body;
    console.log(id+" "+nombreProducto+" "+descripcion+""+costo+""+venta+""+stock+""+imagen);
    estructProductos.update({id:""},{ nombreProducto, descripcion, costo,venta, stock,imagen}, function(err){
        if (err) return console.error(err);
       }) 
    res.send("se actualizo  todos los datos")
})

//post para crear ventas
app.post('/solicitudCompra',(req, res) =>{
    nuevaCompra = new ventas(req.body)
    
    console.log(first)
})

//post para crear productos

app.post("/AgregarInventario", (req, res) => {
    nuevoProducto = new productos(req.body)
    esquemaProductos.create(nuevoProducto)
    res.send("Producto Alamacenado correctamente ")
})
