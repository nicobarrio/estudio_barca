const express = require("express");
const router = express.Router();
const productsController = require('../controllers/productsController')

// MIDDLEWARE //
const upload = require('../middlewares/productsMulterMiddleware');


router.get("/products", productsController.list);
router.get("/products/:id", productsController.detail);
router.get("/create", productsController.create);
router.post('/create', 
    upload.fields([
        { name: 'image', maxCount: 1 },
        { name: 'images', maxCount: 6 }]),
    productsController.save);
router.get("/products", productsController.update);
router.delete("/products", productsController.delete);

module.exports = router;