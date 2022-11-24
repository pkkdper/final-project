const { expressjwt } = require("express-jwt");


function getTokenFromHeaders(req) {
    //   checking if the token is in the headers
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        //  Get the encoded token string and return it
        const token = req.headers.authorization.split(" ")[1];
        return token;
    }

    return null;
}

const isAuthenticated = expressjwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ["HS256"],
    requestProperty: "payload",
    getToken: getTokenFromHeaders,
});

module.exports = { isAuthenticated };