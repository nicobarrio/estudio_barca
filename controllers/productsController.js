const path = require('path');
const { Association } = require("sequelize");
const { Sequelize } = require("../database/models");
const db = require('../database/models');
const Op = Sequelize.Op;

const productsController = {
    list: (req, res) => {
        db.Product.findAll()
            .then(function(products) {
                console.log(products); // Agrega este console.log para verificar los productos recuperados
                res.render(path.join(__dirname, '../views/products/products.ejs'), { products: products });
            })
            .catch(err => {
                console.log(err);
                res.send('An error occurred');
            })
    },
    // listMesas: (req, res) => {
    //     let category = db.Category.findByPk(req.params.id);
    //     db.Product.findAll({
    //         include: [
    //           {
    //             model: db.Category,
    //             where: { id: category } // Filtrar por el ID de la subcategoría
    //           }
    //         ]
    //       })
    //       .then(function (products) {
    //         console.log(products); // Verificar los productos recuperados en la consola
    //         res.render(path.join(__dirname, '../views/products/products.ejs'), { products: products });
    //       })
    //       .catch(err => {
    //         console.log(err);
    //         res.send('An error occurred');
    //       });
    // },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {include: [{association: 'category'}]})
            .then(function(product) {
                res.render(path.join(__dirname, '../views/products/detail.ejs'), { product:product })
            })
    },
    create: (req, res) => {
        db.Category.findAll()
            .then(function(category) {
                return res.render(path.join(__dirname, '../views/products/create.ejs'), { category:category });
            })
    },
    save: (req, res) => {
        const image = req.files.image[0].filename ? req.files.image[0].filename : 'image.png';

        db.Product.create({
            name: req.body.name, 
            description: req.body.description,
            material: req.body.material,
            color: req.body.color,
            dimension: req.body.dimension,
            price: req.body.price,
            quantity: req.body.quantity,
            image: image,
            images: req.files.images[0].path,
            category_id: req.body.category
        })
        .then(result => {
          console.log('Product created!');
          res.redirect('/products');
        })
        .catch(err => {
          console.log(err);
          res.send('An error occurred');
        })
    },
    edit: (req, res) => {
        let editProduct = db.Product.findByPk(req.params.id);
        let editCategory = db.Category.findAll();
    
        Promise.all([editProduct, editCategory])
            .then(function([product, category]) {
                res.render(path.join(__dirname, '../views/products/edit.ejs'), { product:product, category:category })
            })
            .catch(err => {
                console.log(err);
                res.send('An error occurred');
            })
    },
    update: (req, res) => {
        const image = req.files.image[0].filename ? req.files.image[0].filename : 'image.png';

        db.Product.update({
            name: req.body.name, 
            description: req.body.description,
            material: req.body.material,
            color: req.body.color,
            dimension: req.body.dimension,
            price: req.body.price,
            quantity: req.body.quantity,
            image: image,
            images: req.files.images[0].path,
            category_id: req.body.category
        }, {
            where: {
                id: req.params.id
            }   
        })
        .then(result => {
          console.log('Product edited!');
          res.redirect('/products/' + req.params.id);
        })
        .catch(err => {
          console.log(err);
          res.send('An error occurred');
        })
    },
    delete: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products');
    },
    search: async (req, res) => {

        try {
            const resultado = req.query.searcher;
            const products = await db.Product.findAll({
                where: {
                    name: { [Op.like]: `%${resultado}%` }
                },
                include: [{ association: 'category' }]

            });
            res.render(path.join(__dirname, '../views/products/search.ejs'), { products, resultado });
        }
        catch (err) {
            console.log(err)
        }
    },
    cart: (req, res) => {
        res.render(path.join(__dirname, '../views/products/cart'));
    },
}

module.exports = productsController;