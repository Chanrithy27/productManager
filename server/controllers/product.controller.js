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

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params._id }, req.body, { new:true, runValidators: true })
        .then((updatedProduct) => {
            res.json(updatedProduct);
        })
        .catch((err) => {
            res.json(err);
        })
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id})
        .then((deletedProduct) => {
            console.log(deletedProduct);
            res.json(deletedProduct);
        })
        .catch((err) => {
            console.log("Error deleting product", err)
        })
}