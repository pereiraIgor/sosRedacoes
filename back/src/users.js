const express = require('express')
const app = express()

var meusUsuarios = [
    {"nome": "matheus","id":"matheusgr"},
    {"nome": "igor","id":"pereigor"},
];

/* GET users listining */
router.get('/produtos', function(req, res, next)  {
    res.json(meusUsuarios);
});

/* GET users listining */
router.get('/:id', function(req,res, next){
    var id = req.params.id;
    res.json(meusUsuarios[id]);
});

/* POST users listining */
router.post('/', function(req,res, next){
    req.body.id = meusUsuarios.length
    meusUsuarios.push(req.body)
    res.send(meusUsuarios[id])
    res.status('201')
});


/* PUT usuario */
router.put('/', function(req,res, next){
    var id = req.params.id;
    req.body.id = id;
    meusUsuarios[id]= req.body; 
    res.json(req.body)   
    res.status('201')
});



/* GET com parametros*/
router.get('/', function(req,res, next){
    var order = req.query.order;
    var days = req.query.days;

    if (order === 'asc'){

    } else{
        res.json(meusUsuarios);
    }
    res.json(meusUsuarios[id]);
});