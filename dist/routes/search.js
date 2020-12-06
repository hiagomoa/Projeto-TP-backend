"use strict";
/*import { Router } from 'express';

const searchRouter = Router();

import data from '../DADOS/livros.json';

searchRouter.get('/', (req, res)=>{
  const querry = req.query;
  const {input} = querry;
  //const newInput = input.toUpperCase;
  
  const result = data[0].books?.map(o => {
    let titulo = o.titulo.toUpperCase();
    let inputZao;
    if(input!= undefined){
    inputZao= input.toUpperCase();
  }
    let autor = o.autor.toUpperCase();
    if (titulo == inputZao || autor == inputZao) { return o; }
    });


const resultFinal = (result || []).filter(function (el) {
    return el != null;
  });

return res.status(200).json(data);
});

export default searchRouter;*/
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
    var newInput = input === null || input === void 0 ? void 0 : input.toString();
    //const newInput = input.toUpperCase;
    var result = (_a = livros_json_1.default[0].books) === null || _a === void 0 ? void 0 : _a.map(function (o) {
        var titulo = o.titulo.toUpperCase();
        var inputZao = newInput.toUpperCase();
        var autor = o.autor.toUpperCase();
        if (titulo == inputZao || autor == inputZao) {
            return o;
        }
    });
    var resultFinal = result.filter(function (el) {
        return el != null;
    });
    return res.status(200).json(resultFinal[0]);
});
exports.default = searchRouter;
