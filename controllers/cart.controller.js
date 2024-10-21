const CartRouter = require("express").Router();

/**
 *  Description = Returns all the cart
 * METHOD = GET
 */
CartRouter.get('/', function (request, response) {
    return response.status(200).json({
        message: "Cart fetched successfully"
    });
});

module.exports = CartRouter;