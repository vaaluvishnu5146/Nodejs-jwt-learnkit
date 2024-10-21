var jwt = require('jsonwebtoken');
const { SECRET_KEY } = require("../jwt.util");

function validateToken(request, response, next) {
    // invalid token - synchronous
try {
    if(request.headers['token']) {
        const isValid = jwt.verify(request.headers['token'], SECRET_KEY); // valid = true or not valid = err
        if (isValid) {
           next();
        }
    } else {
        return response.status(403).json({
            message: "Token is missing"
        });
    }
  } catch(err) {
    // err
    return response.status(401).json({
        error: err.message,
        message: "Token expired"
    });
  }
}

module.exports = {
    validateToken
};