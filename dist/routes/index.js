"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var search_1 = __importDefault(require("./search"));
var traduccion_1 = __importDefault(require("./traduccion"));
var traducao_1 = __importDefault(require("./traducao"));
var routes = express_1.Router();
routes.use('/search', search_1.default);
routes.use('/traduction', traduccion_1.default);
routes.use('/traducao', traducao_1.default);
exports.default = routes;
