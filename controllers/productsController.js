let db = require('../database/models');
const path = require('path');

const productsController = {
    list: (req, res) => {
        db.Product.findAll()
            .then(function(products) {
                res.render(path.join(__dirname, '../views/products/products.ejs'), { products:products });
            })
            .catch(err => {
                console.log(err);
                res.send('An error occurred');
            })
    },
    detail: (req, res) => {

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
    update: (req, res) => {

    },
    delete: (req, res) => {

    },
}

module.exports = productsController;