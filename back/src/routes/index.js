var express = require('express');
var router = express.Router();

var redacoes = [
  {
    "id": 0,
    "nome": 'Igor Pereira',
    "idade":21,
    "nota":980,
    "redacao":"texxtoooodoisafjdkfjlas",
    "tema":"Escravidão"
  },
  {"id": 1,
    "nome": 'ROMERO BRITO',
    "idade":22,
    "nota":900,
    "redacao":"tedasdsadxxtoooodoisafjdkfjlas",
    "tema":"Escravidão"
  }
];

router.get('/', function (req, res)  {
  res.json(redacoes);
})

router.get('/:id', function(req,res){
  var id = req.params.id;
  res.json(redacoes[id]);
});

router.post('/', function (req, res) {
  req.body.id = redacoes.length;
  redacoes.push(req.body);
  //res.json(req.body);
  res.json(redacoes);
  res.status('201');
});

module.exports = router;
