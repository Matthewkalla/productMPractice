const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product Needs a title"],
        minlength: [3, "Product title needs to be at least 3 chars long"]
    },
    price: {
        type: Number,
        required: [true, "Product needs a price"],
        min: [1, "Price must be at least $1 USD!"]
    },
    description: {
        type: String,
        required: [true, "Must provide a description"],
        minlength: [5, "Description must be at least 5 characters"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Products', ProductsSchema);