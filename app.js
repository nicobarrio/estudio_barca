const express = require('express');
const mysql = require('mysql2');
const path = require('path'); 
const app = express();

const port = 3060;

const publicPath = path.join(__dirname ,'/public');

const dbConnection = mysql.createConnection({
    host: 'bevqmq6mcmx0yovhdg52-mysql.services.clever-cloud.com',
    user: 'uo87ikuhovqrszyd',
    password: 'cm2c36M0loxLVUgyz9T3',
    database: 'bevqmq6mcmx0yovhdg52',
    port: 3306
  });

dbConnection.connect((err) => {
    if (err) {
      console.error('Error al conectar con la base de datos:', err);
    } else {
      console.log('Conexión con la base de datos establecida correctamente');
    }
  });

// REQUERIR RUTAS //
const homeRoute = require('./routes/homeRoute.js');
const productsRoute = require('./routes/productsRoute.js')
const usersRoute = require('./routes/usersRoute.js')

// CAPTURAR INFO DE POST //
app.use(express.urlencoded( { extended:false } ));
app.use(express.json());

// CONFIGURAR PUERTO //
app.listen(port, () => {
    console.log('Server ' + port + ' is working');
});

// CONFIGURAR EJS //
app.set('view engine', 'ejs'); 
app.set("views", path.join(__dirname, "views"));

app.use(express.static(publicPath)); 

app.use('/', homeRoute);
app.use('/', productsRoute);
app.use('/', usersRoute);