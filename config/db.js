//const { error } = require('console');
const mongoose = require('mongoose');

//funcion para conectar a bd
const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/dbGestorBiblioteca");
        console.log('Conexion a la base de datos establecida');
    } catch (err) {
        console.error('Error en la conexion a la base de datos', err);
        procces.exit(1);//detenemos el proceso si hay un error grave en la conexion
    }
}

module.exports = dbconnect;