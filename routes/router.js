var express = require('express');
var router = express.Router();
var login = require('./login');
var index = require('./index')
var article = require('./article');

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
    res.render('register', {title: '注册页面'})
});

//注册接口
router.post('/register/_data', function (req, res, next) {
    login.register(req, res)
});

// 退出登录

router.get('/logout', function (req, res) {
    login.logout()
    res.render('login', {title: '登录'})
})
// 文章列表页
router.get('/article_list', function (req, res, next) {
    article.articleList(req, res)
});
// 发布文章页
router.get('/publish', function (req, res, next) {
    res.render('publish', {title: '发布文章'})
});
// 发布文章接口
router.post('/publish/_data', function (req, res, next) {
    article.publishArticle(req, res)
});
// 文章详情页
router.get('/article/:id', function (req, res, next) {
    article.articleDetail(req, res)
})

module.exports = router;
