var express = require('express');
var router = express.Router();
var login = require('./login');
var index = require('./index')


/* GET home page. */
router.get('/', function (req, res, next) {
    index(req, res);
});

/* GET home page. */
router.get('/login', function (req, res, next) {
    res.render('login', {title: '登录'});
});

//登录接口
router.post('/login/_data', function (req, res, next) {
    login.login(req, res)
});
// 注册页面
router.get('/register', function (req, res, next) {
    res.render('register',{title: '注册页面'})
});

//注册接口
router.post('/register/_data', function (req, res, next) {
    login.register(req, res)
});

// 退出登录

router.get('/logout', function (req, res) {
    login.logout()
    res.render('login',{title: '登录'})
})

module.exports = router;
