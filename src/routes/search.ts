
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


import { Router } from 'express';

const searchRouter = Router();

import data from '../DADOS/livros.json';

searchRouter.get('/', (req, res)=>{
  const { input } = req.query;
  const newInput = input?.toString();
  //const newInput = input.toUpperCase;
  const result = data[0].books?.map(o => {
    let titulo = o.titulo.toUpperCase();
    let inputZao= newInput!.toUpperCase();
    let autor = o.autor.toUpperCase();
    if (titulo == inputZao || autor == inputZao) { return o; }
    });


const resultFinal = result!.filter(function (el) {
    return el != null;
  });

return res.status(200).json(resultFinal[0]);
});

export default searchRouter;