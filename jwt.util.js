const jwt = require('jsonwebtoken');

const SECRET_KEY = "JST_LEARING_B4";

function generateToken() {
    const token = jwt.sign({ name: 'Vishnu Vardhan', subscriptionId: 12123433 }, SECRET_KEY, {
        expiresIn: "1000",
        subject: "123456",
        issuer: "Google"
    });
    return token;
}

module.exports = {
    generateToken,
    SECRET_KEY
};