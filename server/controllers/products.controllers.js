const Product = require("../models/products.model");


module.exports.testApi = (req, res) => {
    res.json({status: "I'm looking good, capt."})
}

//create Product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

//get all Products
module.exports.getProducts = (req, res) => {
    Product.find()
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

//get one Product
module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

//update one Product
module.exports.updateProduct = (res, req) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(response => res.json(response))
    .catch(err => res.json(err));
}

//delete one Product
module.exports.deleteProduct = (res, req) => {
    Product.deleteOne({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}