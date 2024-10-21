const ProductRouter = require("express").Router();


/**
 * Description = Returns all the products
 * METHOD = GET
 */
ProductRouter.get('/', function (request, response) {
    return response.status(200).json({
        message: "Products fetched successfully"
    });
});


module.exports = ProductRouter;