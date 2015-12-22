/**
 * Created by Administrator on 2015/12/22.
 */
//router demo
var express = require('express');
var app = express();
var birds = require('./routes/birds');

app.use('/birds', birds);
app.listen(3000);