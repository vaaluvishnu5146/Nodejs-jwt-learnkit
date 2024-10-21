const express = require("express");
const AuthRouter = require("./controllers/auth.controller");
const ProductRouter = require("./controllers/products.controller");
const CartRouter = require("./controllers/cart.controller");
const { validateToken } = require("./middleware/auth.middleware");

const API_SERVER = express();

API_SERVER.use('/auth', AuthRouter);
API_SERVER.use('/products', validateToken, ProductRouter);
API_SERVER.use('/cart', validateToken, CartRouter);

API_SERVER.listen(3000, "localhost", () => {
    console.log("Server started")
})