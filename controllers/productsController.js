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
          console.log('Product created!');
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
        res.redirect(path.join(__dirname, '../views/products/products.ejs'))
    },
}

module.exports = productsController;