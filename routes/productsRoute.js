const express = require("express");
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get("/products", productsController.list);
router.get("/products/:id", productsController.detail);
router.get("/create", productsController.create);
router.post("/create", productsController.save)
router.get("/products", productsController.update);
router.delete("/products", productsController.delete);

module.exports = router;