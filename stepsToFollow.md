GIT & GITHUB
1. Crear repositorio en GitHub. 
2. git clone. Clonar repositorio.
3. git config --global user.name " " 
4. git config --global user.email " "

INSTALL DEPENDENCIES 
1. npm install express --save
2. npm install nodemon 
3. npm install ejs
4. npm install method-override
5. npm install multer 
6. npm install -g --save sequelize sequelize-cli
7. npm install --save mysql2

CREATE APP.JS
1. Requerir EXPRESS
    const express = require('express');
    const app = express();
2. Requerir rutas PATH
    const path = require('path');
    const publicPath = path.join(__dirname ,'/public');
3. Configurar PUERTO
    const PORT = 3000;
    app.listen(PORT , ()=>{
        console.log('Servidor corriendo ...')
    });
4. Configurar EJS
    app.set('view engine', 'ejs'); 
    app.set("views", path.join(__dirname, "views"));
5. Requerir rutas
    const mainRoute =  require('./routes/mainRoute.js');
    const productsRoute =  require('./routes/productsRoute.js');    
5. Crear rutas principales
    app.use('/', mainRoute);
    app.use(/products, productsRoute);
    ...
6. Configurar metodo override
    const methodOverride = require('method-override'); 
    app.use(methodOverride('_method')); 
7. Capturar información de POST
    app.use(express.urlencoded( { extended:false } ));
    app.use(express.json());
8. Configurar carpeta public 
    app.use(express.static(publicPath));


CREATE HTML & CSS 
1. Crear carpeta views. 
   Dentro de views, crear carpeta partials, products y users.
   En partials irá codigo HTML que se repite.
   En products todas las vistas HTML/EJS que se relacionen al producto, como products.ejs y productDetail.ejs.
   En users todas las vistas HTML/EJS relacionadas al usuario, como login.ejs y register.ejs.
   Las vistas como home.ejs y checkout.ejs van dentro de la carpeta views.
2. Crear carpeta public. 
   Dentro de public, crear las carpetas css e img.
   Dentro de css, irá todo el código CSS, y dentro de img irán todos los archivos de imagenes de las vistas. 

CREATE ROUTES & CONTROLLERS
1. 
