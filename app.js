const express = require('express');
const path = require('path'); 
const app = express();

const port = 3060;

const publicPath = path.join(__dirname ,'/public');

// REQUERIR RUTAS //
const homeRoute = require('./routes/homeRoute.js');

// CONFIGURAR PUERTO //
app.listen(port, () => {
    console.log('Server is working');
});

// CONFIGURAR EJS //
app.set('view engine', 'ejs'); 
app.set("views", path.join(__dirname, "views"));

app.use(express.static(publicPath)); 

app.use('/', homeRoute);