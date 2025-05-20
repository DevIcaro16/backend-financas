"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(request, response, next) {
    var authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).end();
    }
    var _a = authToken.split(" "), token = _a[1];
    try {
        var sub = (0, jsonwebtoken_1.verify)(token, "4f93ac9d10cb751b8c9c646bc9dbccb9").sub;
        request.user_id = sub;
        return next();
    }
    catch (err) {
        return response.status(401).end();
    }
}
exports.isAuthenticated = isAuthenticated;
