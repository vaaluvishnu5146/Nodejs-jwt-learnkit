const { generateToken } = require("../jwt.util");

const AuthRouter = require("express").Router();

/**
 * Description = LOGIN REQUEST
 * METHOD = POST
 */
AuthRouter.post("/login", function (request, response) {
    return response.status(200).json({
        token: generateToken(),
        message: "User logged in successful"
    })
})

module.exports = AuthRouter;