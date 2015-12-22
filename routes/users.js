/**
 * Created by Administrator on 2015/12/18.
 */
var express = require('express');
var router = express.Router();

router.all('/list', function (req, res) {
    console.log(req.method);
    console.log(req.baseUrl);
    console.log(req.path);

    console.log(req.headers['user-agent']);
    //获取某一请求头
    console.log(req.get('user-agent'));

    //获取url查询参数
    console.log(req.query);
    //获取url查询参数值
    console.log(req.query.id);

    //post请求时，获取body中的参数值
    console.log(req.body);
    console.log(req.body.id);

    res.send('hello');
});
//可通过类似/user/101 访问
/*router.get('/:id', function (req, res) {
    //rest风格
    console.log(req.params.id);
    res.send('ok');
});*/
router.get('/fb', function (req, res) {
    res.status(403).send('权限不够，拒绝访问！');
});
router.get('/tt',function(req, res) {
    res.contentType('application/javascript');//告诉浏览器响应时，采用这个类型解析数据，不提供浏览器会直接提供js下载。
    res.sendFile('/ok.js', {root: __dirname + '/../public'});
});
router.get('/mm', function (req, res) {
    res.json({a: 1, b: [true, 'ok']});//告诉浏览器响应时，以json解析
});

router.get('/req', function(req, res) {
    console.log(req.user);
    res.send('ok');
});

module.exports = router;
