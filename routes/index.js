var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/login', function (req, res, next) {
    var users = {
        'aaa': 'aaa123',
        'bbb': 'abc456'
    };

    var data = req.body;
    var password = users[data.username];

    if(password === data.password) {
        res.send({
            success: true,
            data: [{
                name: '蘋果',
                count: 3
            }, {
                name: '芒果',
                count: 10
            }, {
                name: '番茄',
                count: 24
            }]
        });
    } else {
        res.send({
            success: false,
            message: '密碼錯誤'
        });
    }
});

module.exports = router;
