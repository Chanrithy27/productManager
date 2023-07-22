const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json(newProduct);
        })
        .catch((err) => {
            res.json(err);
        })
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then((allProducts) => {
            res.json(allProducts);
        })
        .catch((err) => {
            res.json(err);
        })
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params._id })
        .then((oneProduct) => {
            res.json(oneProduct);
        })
        .catch((err) => {
            res.json(err);
        })
}