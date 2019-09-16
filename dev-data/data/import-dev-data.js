const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Producto = require('./../../models/productoModel');

dotenv.config({ path: './config.env' });

const puerto = process.env.PUERTO || 3000;

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('Base de datos conectada con Atlas'));

// Se leé el JSON de los productos
const productos = JSON.parse(
  fs.readFileSync(`${__dirname}/productos.json`, 'utf-8')
);

// Carga todos los productos a la base de datos
const cargarProductos = async () => {
  try {
    await Producto.create(productos);
    console.log('Productos exitosamente cargados');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// Elimina los productos de la base de datos
const borrarProductos = async () => {
  try {
    await Producto.deleteMany();
    console.log('Productos exitosamente eliminados');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  cargarProductos();
} else if (process.argv[2] === '--delete') {
  borrarProductos();
}

console.log(process.argv);
