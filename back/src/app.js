
const express = require('express')
const app = express()
const port = 3000

var meusUsuarios = [
    {"nome": "matheus",
    "id":1},
    {"nome": "igor",
    "id": 2}
]

/* GET users listining */
app.get('/', function (req, res)  {
    res.json(meusUsuarios);
})

/* GET users listining */
app.get('/:id', function(req,res){
    var id = req.params.id;
    res.json(meusUsuarios[id]);
});


app.post('/', function (req, res) {
    var nome = req.body.nome;
    const usuario = {
        "nome": nome,
        "id":meusUsuarios.length
    }
    meusUsuarios.push(usuario)
    res.send(meusUsuarios).status('201')
  });

/* 
app.post('/', function(req,res, next){
    req.body.id = meusUsuarios.length
    
    meusUsuarios.push(req.body)
    res.send(meusUsuarios[id]).status('201')
});

  */


app.listen(3000, () => console.log('Example app listening on port 3000!'))
