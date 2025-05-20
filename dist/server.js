"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
var routes_1 = require("./routes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.router);
app.use(function (err, req, res, next) {
    if (err instanceof Error) {
        // Se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
app.listen(port, function () { return console.log("Server Online na porta: ".concat(port, "!")); });
