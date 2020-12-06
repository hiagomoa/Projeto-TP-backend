"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var searchRouter = express_1.Router();
var livros_json_1 = __importDefault(require("../DADOS/livros.json"));
searchRouter.get('/', function (req, res) {
    var _a;
    var input = req.query.input;
    //const newInput = input.toUpperCase;
    var result = (_a = livros_json_1.default[0].books) === null || _a === void 0 ? void 0 : _a.map(function (o) {
        var titulo = o.titulo.toUpperCase();
        var inputZao = input.toUpperCase();
        var autor = o.autor.toUpperCase();
        if (titulo == inputZao || autor == inputZao) {
            return o;
        }
    });
    var resultFinal = result.filter(function (el) {
        return el != null;
    });
    return res.status(200).json(livros_json_1.default);
});
exports.default = searchRouter;
