const ProductController = require('../controllers/products.controllers');

module.exports = (app) => {

    app.get('/api', ProductController.testApi);

    app.post('/api/product', ProductController.createProduct);

    app.get('/api/products', ProductController.getProducts);
}