module.exports = function (req, res) {
    var session_key = req.cookies.session_key
    if (session_key) {
        res.render('index', {title: '主页'});
    } else {
        res.render('login', {title: '登录'});
    }

}