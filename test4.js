/**
 * Created by Administrator on 2015/12/22.
 */
/**
 * Created by Administrator on 2015/12/22.
 */
//Methods demo

var express = require('express');
var app = express();

var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
};

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
};

var cb2 = function (req, res) {
    res.send('Hello from C!');
};
app.get('/', [cb0, cb1, cb2]);

app.listen(3000);
