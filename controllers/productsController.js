let db = require('../database/models')
const path = require('path');

const productsController = {
    list: (req, res) => {
        db.Product.findAll()
            .then(function(products) {
                res.render(path.join(__dirname, '../views/products/products.ejs'), {products:products});
            })
    },
    detail: (req, res) => {

    },
    create: (req, res) => {
        db.Category.findAll()
            .then(function(category) {
                return res.render(path.join(__dirname, '../views/products/create.ejs'), {category:category});
            })
    },
    save: (req, res) => {
        db.Product.create({
            name: req.body.name, 
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            image: req.body.image,
            category_id: req.body.category
        })

        res.redirect(path.join(__dirname, '../views/products/products.ejs'));
    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    },
}

module.exports = productsController;