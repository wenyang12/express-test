/**
 * Created by Administrator on 2015/12/22.
 */
var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// 定义网站主页的路由
router.get('/', function(req, res) {
    res.send('Birds home page');
});
// 定义 about 页面的路由
router.get('/about', function(req, res) {
    res.send('About birds');
});

module.exports = router;

//On GET /user/42/3, the following is printed:
/*
 CALLED ONLY ONCE with 42
 CALLED ONLY ONCE with 3
 although this matches
 and this matches too*/
