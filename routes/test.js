var express = require('express');
var router = express.Router();
var api = require('../api')

router.get('/', function(req, res){
    var data = api.getData();
    res.send(JSON.stringify(data));
});

module.exports = router;