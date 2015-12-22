/**
 * Created by Administrator on 2015/12/22.
 */
//    jsonp demo
var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/test7', function(req ,res) {
    res.jsonp({user: 'wen'});
});
app.listen(3000);