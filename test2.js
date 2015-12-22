/**
 * Created by Administrator on 2015/12/22.
 */
//app.mountpath demo
var express = require('express');
var admin = express();
var app = express();

admin.get('/', function (req, res) {
    console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
    res.send('Admin Homepage');
});

var secret = express();
secret.get('/', function (req, res) {
    console.log(secret.mountpath); // /secr*t
    res.send('Admin Secret');
});

admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the parent app
app.listen(3000);