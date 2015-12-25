/**
 * Created by Administrator on 2015/12/18.
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//json类型的body  如果用户通过post发送的数据，则采用json解析
app.use(bodyParser.json());
//query string类型body 通过get请求url附带数据发送过来的解析方式
app.use(bodyParser.urlencoded({
    extended: false
}));

//静态文件目录 请求一个文件时，优先到这个目录里找，找到返回
app.use(express.static(__dirname + '/public')); //把这个目录下的所有文件暴露给http接口

//路由与业务逻辑
app.set('view engine', 'ejs');//设置魔板引擎
app.set('views', __dirname + '/views');//设置魔板路径
app.get('/', function (req, res) {
    res.render('index.ejs', {name: 'wen'});
});
app.use('/user', require('./routes/users.js')); //可以通过localhost:8000/user/list/  访问
app.listen(8000);