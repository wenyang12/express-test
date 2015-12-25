/**
 * Created by Administrator on 2015/12/22.
 */
//param demo
var express = require('express');
var app = express();

app.param(['id', 'page'], function (req, res, next, value) {
    console.log('CALLED ONLY ONCE with', value);
    next();
});

app.get('/user/:id/:page', function (req, res, next) {
    console.log('although this matches');
    res.send(req.params);
    next();
});

app.get('/user/:id/:page', function (req, res) {
    console.log('and this matches too');
    res.end();
});
app.listen(3000);

//On GET /user/42/3, the following is printed:
/*
CALLED ONLY ONCE with 42
CALLED ONLY ONCE with 3
although this matches
and this matches too*/
