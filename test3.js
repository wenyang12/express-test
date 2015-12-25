/**
 * Created by Administrator on 2015/12/22.
 */
//Events demo

var express = require('express');
var admin = express();
var app = express();

admin.on('mount', function (parent) {//监听mount事件
    console.log('Admin Mounted');
    console.log(parent); // refers to the parent app
});

admin.get('/', function (req, res) {
    res.send('Admin Homepage');
});

app.use('/admin', admin);
app.listen(3000);
