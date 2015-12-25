/**
 * Created by Administrator on 2015/12/22.
 */
//app.mountpath demo
var express = require('express');

var app = express(); // the main app
var admin = express(); // the sub app

admin.get('/', function (req, res) {
    console.log(admin.mountpath); // /admin
    res.send('Admin Homepage');
});

app.use('/admin', admin); // mount the sub app
app.listen(3000);