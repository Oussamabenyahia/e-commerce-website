const controllers = {};

controllers.user = require('./userController');
controllers.product = require('./productController');
controllers.review = require('./reviewController');



module.exports = controllers;